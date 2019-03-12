import { getMDLinks, getMDFiles, convertRelativeToAbsolute } from './controller/path.js';
import { linksValidate } from './controller/validate.js';
import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from './controller/stats.js';
import { resolve } from 'dns';

const fs = require('fs'); 

const mdLinks = (path, options) => {
  console.log(path);
  // console.log(options);

  return new Promise((res, rej) => {
    if (fs.existsSync(path)) {
      const arrPathFileMD = getMDFiles(convertRelativeToAbsolute(path));
      const arrObjMDLinks = getMDLinks(arrPathFileMD);
      if (arrObjMDLinks === 0) {
        res('No se encuentra links');
      }
      if (options.validate && options.stats) {
        linksValidate(arrObjMDLinks)
          .then(response => res({total: totalLinksStats(response), unique: uniqueLinksStats(response), broken: brokenLinksStats(responde)}));
      } else if (options.validate) {
        linksValidate(arrObjMDLinks)
          .then(response => res(response));
      } else if (option.stats) {
        resolve({total: totalLinksStats(arrObjMDLinks), unique: uniqueLinksStats(arrObjMDLinks)}); 
      } else {
        resolve(arrObjMDLinks);
      }
    } else {
      resolve(`La ruta colocada no se encuentra ${convertRelativeToAbsolute(path)}`);
    }
  }); 
};

mdLinks('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')
  .then(res => console.log(res)); 

// let fs = require('fs');

// fs.readFile('.\\src\\controller\\path.js', function(err, content) {
//   fs.writeFile('.\\src\\cli.js', content.length, function(err) {
//     console.log(content.length);
//   });
// });

// function readFile(name) {
//   return new Promise(function(resolve, reject) {
//     fs.readFile(name, function(err, content) {
//       if (err) {
//         return reject(err);
//       }
//       resolve(content);
//     });
//   });
// }

// function writeFile(name, content) {
//   return new Promise(function(resolve, reject) {
//     fs.writeFile(name, content, function(err) {
//       if (err) {
//         return reject(err);
//       }
//       resolve();
//     });
//   });
// }

// readFile('.\\src\\controller\\path.js')
//   .then(content => writeFile('.\\src\\cli.js', content.length))
//   .catch(err => console.log('Hubo un error: ' + error.message));