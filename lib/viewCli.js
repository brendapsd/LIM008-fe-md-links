#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showConsole = void 0;

var _index = require("./index.js");

var _stats = require("./controller/stats.js");

const validateOption = {
  validate: false
};

const showConsole = (pathEntrate, firstOption, secondOption) => {
  if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
    validateOption.validate = true;
    return (0, _index.mdLinks)(pathEntrate, validateOption).then(res => `Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}\nBroken:${(0, _stats.brokenLinksStats)(res)}`);
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    return (0, _index.mdLinks)(pathEntrate, validateOption).then(res => {
      return res.map(objLinks => `File: ${pathEntrate}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`).join('');
    });
  } else if (firstOption === '--stats') {
    return (0, _index.mdLinks)(pathEntrate, validateOption).then(res => `Total:${(0, _stats.totalLinksStats)(res)}\nUnique:${(0, _stats.uniqueLinksStats)(res)}`);
  } else {
    return (0, _index.mdLinks)(pathEntrate, validateOption).then(res => {
      return res.map(objLinks => `File: ${pathEntrate}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`).join('');
    });
  }
};

exports.showConsole = showConsole;