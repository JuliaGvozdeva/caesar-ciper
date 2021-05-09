import { caesarFunc } from './utils/caesarFunc.js';
import { checkErrors } from './checkErrors.js';
import { getOptions } from './utils/getOptiopns.js';

const options = getOptions();

if (!checkErrors(options)) {
    process.exit();
}

caesarFunc(options);