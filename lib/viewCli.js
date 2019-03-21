"use strict";

var _cli = require("./cli.js");

const pathInput = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];
(0, _cli.showConsole)(pathInput, firstOption, secondOption).then(resp => console.log(resp));