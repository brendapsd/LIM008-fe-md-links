import { getMDLinks, getMDFiles, convertRelativeToAbsolute, pathIsAbsolute } from './controller/path.js';
import { linksValidate } from './controller/validate.js';

export const mdLinks = (path, options) => {
  let pathAbsolute; 
  if (!pathIsAbsolute(path)) {
    pathAbsolute = convertRelativeToAbsolute(path); 
  } else {
    pathAbsolute = path; 
  };
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(getMDLinks(getMDFiles(pathAbsolute)));
    } if (options.validate) {
      resolve(linksValidate(getMDLinks(getMDFiles(pathAbsolute))));
    } 
  });
};

// mdLinks('.\\test\\testPrueba\\file6.md', { validate: false })
//   .then(res => console.log(res)); 
