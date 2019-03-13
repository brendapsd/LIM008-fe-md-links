import { getMDLinks, getMDFiles, convertRelativeToAbsolute, pathIsAbsolute } from './controller/path.js';
import { linksValidate } from './controller/validate.js';

// const options = {
//   validate: true 
// };

export const mdLinks = (path, options) => {
  let pathAbs; 
  if (!pathIsAbsolute(path)) {
    pathAbs = convertRelativeToAbsolute(path); 
  } else {
    pathAbs = path; 
  };
  return new Promise((resolve) => {
    if (options === undefined) {
      resolve(getMDLinks(getMDFiles(pathAbs)));
    } if (options.validate) {
      resolve(linksValidate(getMDLinks(getMDFiles(pathAbs))));
    } 
  });
};

mdLinks('.\\test\\testPrueba\\file6.md')
  .then(res => console.log(res)); 

// const options = {
//   validate : true 
// }

// const mdLinks = (path, options) => {

//   let pathAbs;
//   if (!pathToBeAbsolute(path)) {
//     pathAbs = relativeToAbsolute(path);
//   } else {
//     pathAbs = path;
//   };
//   return new Promise((resolve) => {
//     if (options === undefined) {
//       resolve(getLinks(contentFiles(pathAbs)));
//     } if (options.validate) {
//       resolve(validateLinks(getLinks(contentFiles(pathAbs))));
//     } 
//   })
// }


// mdLinks('C:\\Users\\Laboratoria\\Desktop\\MD-LINKS\\LIM008-fe-md-links\\Test\\mds')
// .then(res => console.log(res));

// const mdLinks = (path, options) => {
//   return new Promise((res, rej) => {
//     const arrPathFileMD = getMDFiles(convertRelativeToAbsolute(path));
//     const arrObjMDLinks = getMDLinks(arrPathFileMD);
//     if (arrObjMDLinks === 0) {
//       res('No se encuentra links');
//     } else if (options.validate) {
//       linksValidate(arrObjMDLinks)
//         .then(response => res(response));
//       // console.log(arrObjMDLinks);
//     } else {
//       res(arrObjMDLinks);
//     }
//   }); 
// };

// mdLinks('.\\test\\testPrueba\\file6.md')
//   .then(res => console.log(res)); 

// mdLinks('.\\test\\testPrueba\\file6.md', {validate: true})
//   .then(res => console.log(res)); 
