import { caesarFunc } from './utils/caesarFunc.js';
import { checkErrors } from './checkErrors.js';
import { getOptions } from './utils/getOptiopns.js';
import {createReadbleStream} from './utils/readStream';
import {createWritebleStream} from './utils/writeStream';
import {pipeline} from 'stream';
import { error } from 'console';

const options = getOptions();

if (!checkErrors(options)) {
    process.exit();
}

const readInput = createReadbleStream(options.input);
const transformData = caesarFunc(options);
const writeOutput = createWritebleStream(options.output);

pipeline(
    readInput,
    transformData,
    writeOutput,
    (err) => {
        if (err) {
            console.error('Pipline failed', err);
            process.exit(-1);
        }
    }
)

