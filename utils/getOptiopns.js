import { Command } from 'commander/esm.mjs';

const getOptions = () => {
    const program = new Command();

    program
    .option('-s, --shift <value>', 'shift size', 0)
    .option('-a, --action [action]', 'action')
    .option('-i, --input [file]', 'input file')
    .option('-o, --output [file]', 'output file')
    .parse();

    program.parse(process.argv);

    return program.opts();
};

export {getOptions}