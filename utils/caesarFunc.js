import fs from 'fs';
import { checkFile } from '../checkErrors.js';

const caesarFunc = (options) => {
    const alph = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const inputPath = options.input;
    const outputPath = options.output;
    const shift = +options.shift;
    const action = options.action;
    let data = '';
    
    try {
        let outputData = '';
        if (inputPath) {
            checkFile(inputPath);
            data = fs.readFileSync(inputPath, 'utf-8');
            outputData = action === 'encode' ? encode(data, shift, alph) : decode(data, shift, alph);
            writeEncodeValue(outputPath, outputData);
        } else {
            process.stdin.on('data', data => {
                outputData = action === 'encode' ? encode(data.toString(), shift, alph) : decode(data.toString(), shift, alph);
                writeEncodeValue(outputPath, outputData);
            });
        }
       
    } catch (error) {
        console.error(error);
    }
}

function encode(data, shift, alph) {
    let encodeData = '';

    for (let char of data) {
        let alphChar = alph.indexOf(char);
        encodeData += alphChar === -1 ? char : alph[mod((alphChar + shift),alph.length)];
    }

    return encodeData;
}

function decode(data, shift, alph) {
    let decodeData = '';

    for (let char of data) {
        let alphChar = alph.indexOf(char);
        decodeData += alphChar === -1 ? char : alph[mod((alphChar - shift),alph.length)];
    }

    return decodeData;
}

function mod(x, m) {
    return (x % m + m) % m;
  }

function writeEncodeValue(outputPath, data) {
    if (outputPath) {
        checkFile(outputPath);
        fs.writeFileSync(outputPath, data);
    } else {
        console.log(data);
    }
}

export {caesarFunc}