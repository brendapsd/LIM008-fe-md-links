import { getMDLinks, getMDFiles, convertRelativeToAbsolute } from './controller/path.js';
import { linksValidate } from './controller/validate.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';
import { resolve } from 'dns';

const fs = require('fs'); 

const mdLinks = (path, options) => {
  // console.log(path);
  // console.log(options);
  return new Promise((res, rej) => {
    const arrPathFileMD = getMDFiles(convertRelativeToAbsolute(path));
    const arrObjMDLinks = getMDLinks(arrPathFileMD);
    if (arrObjMDLinks === 0) {
      res('No se encuentra links');
    } else if (options.validate) {
      linksValidate(arrObjMDLinks)
        .then(response => res(response));
      console.log(arrObjMDLinks);
    } else {
      resolve(arrObjMDLinks);
    }
  }); 
};

mdLinks('.\\test\\testPrueba\\file6.md', {validate: true})
  .then(res => console.log); 
