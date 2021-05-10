import {Transform} from 'stream';

const ALPH  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function caesarFunc(options) {
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