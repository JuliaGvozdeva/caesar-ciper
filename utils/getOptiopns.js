import { Command } from 'commander/esm.mjs';

const getOptions = () => {
    const program = new Command();

    program
    .option('-s, --shift <type>')
    .option('-a, --action <type>')
    .option('-i, --input <type>')
    .option('-o, --output <type>')
    .parse();

    program.parse(process.argv);

    return program.opts();
};

export {getOptions}