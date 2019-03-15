"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksValidate = void 0;

var _path = require("./path.js");

const fetch = require('node-fetch');

const linksValidate = arrObjLinks => {
  const travelArrObjLinks = arrObjLinks.map(linkObj => {
    return new Promise((resolve, reject) => {
      fetch(linkObj.href).then(response => {
        if (response.status >= 200 && response.status < 400) {
          linkObj.status = response.status;
          linkObj.message = response.statusText;
          resolve(linkObj);
        } else {
          linkObj.status = response.status;
          linkObj.message = 'Fail';
          resolve(linkObj);
        }
      }).catch(error => {
        linkObj.status = '';
        linkObj.message = 'Not Found';
        resolve(linkObj);
      });
    });
  });
  return Promise.all(travelArrObjLinks);
};

exports.linksValidate = linksValidate;
linksValidate((0, _path.getMDLinks)((0, _path.getMDFiles)('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md'))).then(res => console.log(res));