import {createReadStream} from 'fs';

export function createReadbleStream(input) {
    return input ? createReadStream(input) : process.stdin;
}