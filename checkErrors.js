import fs from 'fs';

const checkErrorsFunc = (options) => {
    let checkShift = new RegExp('^-?[0-9]+$');
    
    if (!options.action || !options.shift) {
        console.error('Action and shift parameters are required.');
        process.exit(-1);
    } else if (options.action !== 'encode' && options.action !== 'decode') {
        console.error(`Required value for the action: encode or decode. You entered action = ${options.action}.`);
        process.exit(-1);
    } 
    else if (!checkShift.test(options.shift)) {
        console.error(`The type of the offset value must be a number.`);
        process.exit(-1);
    }
}

const checkExistnigFile = (path) => {
    if (!fs.existsSync(path)) {
        console.error(`The ${path} file was not found or could not be read. Please try again or update the file.`)
        process.exit(-1);
    }
}

export { checkErrorsFunc as checkErrors, checkExistnigFile as checkFile }