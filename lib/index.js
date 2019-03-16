"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("./controller/path.js");

var _validate = require("./controller/validate.js");

const mdLinks = (path, options) => {
  let pathAbsolute;

  if (!(0, _path.pathIsAbsolute)(path)) {
    pathAbsolute = (0, _path.convertRelativeToAbsolute)(path);
  } else {
    pathAbsolute = path;
  }

  ;
  return new Promise(resolve => {
    if (!options.validate) {
      resolve((0, _path.getMDLinks)((0, _path.getMDFiles)(pathAbsolute)));
    }

    if (options.validate) {
      resolve((0, _validate.linksValidate)((0, _path.getMDLinks)((0, _path.getMDFiles)(pathAbsolute))));
    }
  });
}; // mdLinks('.\\test\\testPrueba\\file6.md', { validate: false })
//   .then(res => console.log(res)); 


exports.mdLinks = mdLinks;