import fs from 'fs';
import {Transform} from 'stream';

const ALPH  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const caesarFunc = (options) => {
    const shift = +options.shift;
    const action = options.action;

    return new Transform({
        transform(chunk, encoding, callback) {
            const data = chunk.toString();
            const codeData = action === 'encode' ? encode(data, shift) : decode(data, shift);
            this.push(codeData);
            this.push('\n');
            callback();
        }
    });
}
    
//     try {
//         let outputData = '';
//         if (inputPath) {
//             checkFile(inputPath);
//             data = fs.readFileSync(inputPath, 'utf-8');
//             outputData = action === 'encode' ? encode(data, shift, alph) : decode(data, shift, alph);
//             writeEncodeValue(outputPath, outputData);
//         } else {
//             process.stdin.on('data', data => {
//                 outputData = action === 'encode' ? encode(data.toString(), shift, alph) : decode(data.toString(), shift, alph);
//                 writeEncodeValue(outputPath, outputData);
//             });
//         }
       
//     } catch (error) {
//         console.error(error);
//     }
// }

function encode(data, shift) {
    let encodeData = '';

    for (let char of data) {
        let alphChar = ALPH.indexOf(char);
        encodeData += alphChar === -1 ? char : ALPH[mod((alphChar + shift), ALPH.length)];
    }

    return encodeData;
}

function decode(data, shift) {
    let decodeData = '';

    for (let char of data) {
        let alphChar = ALPH.indexOf(char);
        decodeData += alphChar === -1 ? char : ALPH[mod((alphChar - shift),ALPH.length)];
    }

    return decodeData;
}

function mod(x, m) {
    return (x % m + m) % m;
  }

// function writeEncodeValue(outputPath, data) {
//     if (outputPath) {
//         checkFile(outputPath);
//         fs.writeFileSync(outputPath, data);
//     } else {
//         console.log(data);
//     }
// }

export {caesarFunc}