#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./controller/stats.js");

const validateOption = {
  validate: false
};

const showConsole = (path, firstOption, secondOption) => {
  // console.log('path: ' + path);
  // console.log('firstOption: ' + firstOption);
  // console.log('secondOption: ' + secondOption);
  // return new Promise((resolve) => {
  if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
    validateOption.validate = true;
    return (0, _index.mdLinks)(path, validateOption).then(res => `Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}\nBroken:${(0, _stats.brokenLinksStats)(res)}`);
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    return (0, _index.mdLinks)(path, validateOption).then(res => {
      return res.map(objLinks => `File: ${path}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`).toString();
    });
  } else if (firstOption === '--stats') {
    return (0, _index.mdLinks)(path, validateOption).then(res => `Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}`);
  } else {
    // console.log('validate: ' + validateOption.validate);
    return (0, _index.mdLinks)(path, validateOption).then(res => {
      return res.map(objLinks => `File: ${path}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`).toString();
    });
  } // });  

};

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4]; // showConsole('test/testPrueba', '--validate', '').then(resp => console.log(resp));

showConsole(path, firstOption, secondOption).then(resp => console.log(resp));