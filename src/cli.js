#!/usr/bin/env node

import { mdLinks } from './index.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

const validateOption = {
  validate: false
};

if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
  validateOption.validate = true;
  mdLinks(path, validateOption)
    .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}\nBroken:${brokenLinksStats(res)}`));
} else if (firstOption === '--validate') {
  validateOption.validate = true;
  mdLinks(path, validateOption)
    .then(res => {
      res.forEach((objLinks) => {
        console.log(`${path} ${objLinks.href} ${objLinks.message} ${objLinks.status}`);
      });  
    }); 
} else if (firstOption === '--stats') {
  mdLinks(path, validateOption)
    .then(res => console.log(`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}`));
} else {
  mdLinks(path, validateOption)
    .then(res => res.forEach((objLinks) => { 
      console.log(`${objLinks.file}\n${objLinks.href}\n${objLinks.text}`);
    })); 
}

