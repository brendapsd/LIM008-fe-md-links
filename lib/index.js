"use strict";

var _path = require("./controller/path.js");

var _validate = require("./controller/validate.js");

var _stats = require("./controller/stats.js");

var _dns = require("dns");

const fs = require('fs');

const mdLinks = (path, options) => {
  // console.log(path);
  // console.log(options);
  return new Promise((res, rej) => {
    const arrPathFileMD = (0, _path.getMDFiles)((0, _path.convertRelativeToAbsolute)(path));
    const arrObjMDLinks = (0, _path.getMDLinks)(arrPathFileMD);

    if (arrObjMDLinks === 0) {
      res('No se encuentra links');
    } else if (options.validate) {
      (0, _validate.linksValidate)(arrObjMDLinks).then(response => res(response));
      console.log(arrObjMDLinks);
    } else {
      (0, _dns.resolve)(arrObjMDLinks);
    }
  });
};

mdLinks('.\\test\\testPrueba\\file6.md', {
  validate: true
}).then(res => console.log);