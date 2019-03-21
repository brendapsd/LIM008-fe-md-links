#!/usr/bin/env node

import { mdLinks } from './index.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';

const validateOption = {
  validate: false
};

export const showConsole = (pathEntrate, firstOption, secondOption) => {
  if ((firstOption === '--validate' && secondOption === '--stats') || (firstOption === '--stats' && secondOption === '--validate')) {
    validateOption.validate = true;
    return mdLinks(pathEntrate, validateOption)
      .then(res => (`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}\nBroken:${brokenLinksStats(res)}`));
  } else if (firstOption === '--validate') {
    validateOption.validate = true;
    return mdLinks(pathEntrate, validateOption)
      .then(res => {
        return res.map(objLinks => (`File: ${pathEntrate}\nhref: ${objLinks.href}\nmessage: ${objLinks.message}\nstatus: ${objLinks.status}\ntext: ${objLinks.text}\n`)).join('');
      });
  } else if (firstOption === '--stats') {
    return mdLinks(pathEntrate, validateOption)
      .then(res => (`Total:${totalLinksStats(res)}\nUnique:${uniqueLinksStats(res)}`));
  } else {
    return mdLinks(pathEntrate, validateOption)
      .then(res => {
        return res.map(objLinks => (`File: ${pathEntrate}\nhref: ${objLinks.href}\nText: ${objLinks.text}\n`)).join('');
      });
  } 
}; 


