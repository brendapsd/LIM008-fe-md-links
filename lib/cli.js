#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _stats = require("./controller/stats.js");

const validateOption = {
  validate: false
};

const showConsole = (path, firstOption, secondOption) => {
  path = process.argv[2];
  firstOption = process.argv[3];
  secondOption = process.argv[4];

  if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
    validateOption.validate = true;
    (0, _index.mdLinks)(path, validateOption).then(res => console.log(`Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}\nBroken:${(0, _stats.brokenLinksStats)(res)}`));
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    (0, _index.mdLinks)(path, validateOption).then(res => {
      res.forEach(objLinks => {
        console.log(`File: ${path}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`);
      });
    });
  } else if (firstOption === '--stats') {
    (0, _index.mdLinks)(path, validateOption).then(res => console.log(`Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}`));
  } else {
    (0, _index.mdLinks)(path, validateOption).then(res => res.forEach(objLinks => {
      console.log(`File: ${path}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`);
    }));
  }

  return showConsole;
};