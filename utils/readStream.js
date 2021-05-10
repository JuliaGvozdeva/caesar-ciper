import {createReadStream} from 'fs';
import { checkFile } from '../checkErrors.js';

export function createReadbleStream(input) {
    if (input) {
        checkFile(input);
        return createReadStream(input);
    } else {
        return  process.stdin;
    }
}