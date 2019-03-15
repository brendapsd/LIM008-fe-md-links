#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./controller/stats.js");

// const [,, ...args] = process.argv;
// console.log(process.argv);
const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];
const validateOption = {
  validate: false
};

if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
  validateOption.validate = true;
  (0, _index.mdLinks)(path, validateOption).then(res => console.log(`Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}\nBroken:${(0, _stats.brokenLinksStats)(res)}`)).catch(error => console.log(error));
} else if (firstOption === '--validate') {
  validateOption.validate = true;
  (0, _index.mdLinks)(path, validateOption).then(res => {
    res.forEach(objLinks => {
      console.log(`${path} ${objLinks.href} ${objLinks.message} ${objLinks.status}`);
    });
  }).catch(error => console.log(error));
} else if (firstOption === '--stats') {
  (0, _index.mdLinks)(path).then(res => console.log(`Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}`)).catch(error => console.log(error));
} else {
  (0, _index.mdLinks)(path).then(res => res.forEach(objLinks => {
    console.log(`${objLinks.file}\n${objLinks.href}\n${objLinks.text}`);
  })).catch(error => console.log(error));
}