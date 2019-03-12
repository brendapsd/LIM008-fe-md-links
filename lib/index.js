"use strict";

var _path = require("./controller/path.js");

var _validate = require("./controller/validate.js");

var _stats = require("./controller/stats.js");

var _dns = require("dns");

const fs = require('fs');

const mdLinks = (path, options) => {
  console.log(path); // console.log(options);

  return new Promise((res, rej) => {
    if (fs.existsSync(path)) {
      const arrPathFileMD = (0, _path.getMDFiles)((0, _path.convertRelativeToAbsolute)(path));
      const arrObjMDLinks = (0, _path.getMDLinks)(arrPathFileMD);

      if (arrObjMDLinks === 0) {
        res('No se encuentra links');
      }

      if (options.validate && options.stats) {
        (0, _validate.linksValidate)(arrObjMDLinks).then(response => res({
          total: (0, _stats.totalLinksStats)(response),
          unique: (0, _stats.uniqueLinksStats)(response),
          broken: (0, _stats.brokenLinksStats)(responde)
        }));
      } else if (options.validate) {
        (0, _validate.linksValidate)(arrObjMDLinks).then(response => res(response));
      } else if (option.stats) {
        (0, _dns.resolve)({
          total: (0, _stats.totalLinksStats)(arrObjMDLinks),
          unique: (0, _stats.uniqueLinksStats)(arrObjMDLinks)
        });
      } else {
        (0, _dns.resolve)(arrObjMDLinks);
      }
    } else {
      (0, _dns.resolve)(`La ruta colocada no se encuentra ${(0, _path.convertRelativeToAbsolute)(path)}`);
    }
  });
};

mdLinks('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md').then(res => console.log(res)); // let fs = require('fs');
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