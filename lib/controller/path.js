"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMDLinks = exports.getMDFiles = exports.readFiles = exports.fileIsMD = exports.readDirectory = exports.pathIsFile = exports.pathIsDirectory = exports.convertRelativeToAbsolute = exports.pathIsAbsolute = void 0;

const path = require('path');

const fs = require('fs');

const marked = require('marked');

const pathIsAbsolute = pathEvaluate => {
  return path.isAbsolute(pathEvaluate);
};

exports.pathIsAbsolute = pathIsAbsolute;

const convertRelativeToAbsolute = pathRelative => {
  return path.resolve(pathRelative);
};

exports.convertRelativeToAbsolute = convertRelativeToAbsolute;

const pathIsDirectory = pathEvaluate => {
  return fs.lstatSync(pathEvaluate).isDirectory();
};

exports.pathIsDirectory = pathIsDirectory;

const pathIsFile = pathEvaluate => {
  return fs.lstatSync(pathEvaluate).isFile();
};

exports.pathIsFile = pathIsFile;

const readDirectory = directory => {
  return fs.readdirSync(directory);
};

exports.readDirectory = readDirectory;

const fileIsMD = file => {
  return path.extname(file);
};

exports.fileIsMD = fileIsMD;

const readFiles = info => {
  return fs.readFileSync(info, 'utf8');
};

exports.readFiles = readFiles;

const getMDFiles = router => {
  let arrayMDFiles = [];

  if (pathIsFile(router) === true) {
    if (fileIsMD(router) === '.md') {
      arrayMDFiles.push(router);
    }
  }

  if (pathIsDirectory(router) === true) {
    const arrNameContent = readDirectory(router);
    arrNameContent.forEach(nameFile => {
      const newRouter = path.join(router, nameFile);
      arrayMDFiles = arrayMDFiles.concat(getMDFiles(newRouter));
    });
  }

  return arrayMDFiles;
};

exports.getMDFiles = getMDFiles;

const getMDLinks = arrayMDFiles => {
  let arrayLinks = [];
  arrayMDFiles.forEach(routerMD => {
    const readFilesMD = readFiles(routerMD);
    const renderer = new marked.Renderer();

    renderer.link = (href, ___, text) => {
      arrayLinks.push({
        href,
        text,
        file: routerMD
      });
    };

    marked(readFilesMD, {
      renderer
    });
  });
  return arrayLinks;
}; // console.log(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba'))); 
// const inputTerminal = process.argv[2];
// console.log(inputTerminal);
// console.log(getMDFiles(process.argv[2])); 


exports.getMDLinks = getMDLinks;