import {createWriteStream} from 'fs';

export function createWritebleStream(output) {
    return output ? createWriteStream(output) : process.stdout;
}