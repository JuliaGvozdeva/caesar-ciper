import { caesarFunc } from './utils/caesarFunc.js';
import { checkErrors } from './checkErrors.js';
import { getOptions } from './utils/getOptiopns.js';
import {createReadbleStream} from './utils/readStream.js';
import {createWritebleStream} from './utils/writeStream.js';
import {pipeline} from 'stream';

const options = getOptions();
checkErrors(options);

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

