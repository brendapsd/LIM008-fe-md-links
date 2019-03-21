import { showConsole } from './cli.js';

const pathInput = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

showConsole(pathInput, firstOption, secondOption).then(resp => console.log(resp));