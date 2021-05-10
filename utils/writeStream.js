import { createWriteStream } from 'fs';
import { checkFile } from '../checkErrors.js';

export function createWritebleStream(output) {
    if (output) {
        checkFile(output);
        return createWriteStream(output);
    } else {
        return  process.stdout;
    }
}