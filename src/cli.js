#!/usr/bin/env node

import { mdLinks } from './index.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';

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
  mdLinks(path, validateOption)
    .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}\nBroken:${brokenLinksStats(res)}`))
    .catch(error => console.log(error));
} else if (firstOption === '--validate') {
  validateOption.validate = true;
  mdLinks(path, validateOption)
    .then(res => {
      res.forEach((objLinks) => {
        console.log(`${path} ${objLinks.href} ${objLinks.message} ${objLinks.status}`);
      });  
    })
    .catch(error => console.log(error));
} else if (firstOption === '--stats') {
  mdLinks(path)
    .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}`))
    .catch(error => console.log(error));
} else {
  mdLinks(path)
    .then(res => res.forEach((objLinks) => { 
      console.log(`${objLinks.file}\n${objLinks.href}\n${objLinks.text}`);
    }))
    .catch(error => console.log(error));
}

