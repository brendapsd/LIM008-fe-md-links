#!/usr/bin/env node

import { mdLinks } from './index.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';

const validateOption = {
  validate: false
};

const showConsole = (path, firstOption, secondOption) => {
  // console.log('path: ' + path);
  // console.log('firstOption: ' + firstOption);
  // console.log('secondOption: ' + secondOption);
  
  
  // return new Promise((resolve) => {
  if ((firstOption === '--validate' && secondOption === '--stats') || (firstOption === '--stats' && secondOption === '--validate')) {
    validateOption.validate = true;
    return mdLinks(path, validateOption)
      .then(res => (`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}\nBroken:${brokenLinksStats(res)}`));
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    return mdLinks(path, validateOption)
      .then(res => {
        return res.map(objLinks => (`File: ${path}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`)).toString();
      });
  } else if (firstOption === '--stats') {
    return mdLinks(path, validateOption)
      .then(res => (`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}`));
  } else {
    // console.log('validate: ' + validateOption.validate);
    return mdLinks(path, validateOption)
      .then(res => {
        return res.map(objLinks => (`File: ${path}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`)).toString();
      });
  }
  // });  
}; 
const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

// showConsole('test/testPrueba', '--validate', '').then(resp => console.log(resp));
showConsole(path, firstOption, secondOption).then(resp => console.log(resp));
