import fs from 'fs';

const checkErrorsFunc = (options) => {
    let ckeckShift = new RegExp('^[0-9]+$');
    
    if (options.action === undefined || options.shift === undefined) {
        console.error('Action and shift parameters are required.');
        return false;
    } else if (options.action !== 'encode' && options.action !== 'decode') {
        console.error(`Required value for the action: encode or decode. You entered action = ${options.action}.`);
        return false;
    } else if (!ckeckShift.test(options.shift)) {
        console.error(`The type of the offset value must be a number.`);
        return false;
    }
    return true;
}

const checkExistnigFile = (path) => {
    if (!fs.existsSync(path)) {
        console.error(`The ${path} file was not found or could not be read. Please try again or update the file.`)
        process.exit();
    }
}

export { checkErrorsFunc as checkErrors, checkExistnigFile as checkFile }