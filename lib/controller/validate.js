"use strict";

var _path = require("./path.js");

const fetch = require('node-fetch'); // const linksValidate = (arrObjLinks) => { 
//   const travelArrObjLinks = arrObjLinks.forEach((linksOfArray) => {
//     return new Promise((resolve, reject) => {
//       fetch(linksOfArray.href)
//         .then(result => {
//           if (result.status >= 200 && result.status < 400) {
//             linksOfArray.status = result.status;
//             linksOfArray.message = result.status; 
//             resolve(linksOfArray);
//           } else {
//             linksOfArray.status = result.status;
//             linksOfArray.message = 'Fail'; 
//             resolve(linksOfArray);
//           }
//         }).catch(error => {
//           return reject(error);
//         });
//     });
//   });
//   return Promise.all(travelArrObjLinks); 
// };


let validationCorrectsLinks = function validationCorrectsLinks(arrayObjectLinks) {
  let walkArrayObjectLink = arrayObjectLinks.map(function (links) {
    return new Promise(function (resolve, reject) {
      fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.message = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.message = 'Fail';
          resolve(links);
        }
      }).catch(function (error) {
        return reject(error);
      });
    });
  });
  return Promise.all(walkArrayObjectLink);
}; // linksValidate(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md'))); 


console.log(validationCorrectsLinks((0, _path.getMDLinks)((0, _path.getMDFiles)('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba')))); // fetch('https://api.github.com/users/github')
//   .then(res => res.json())
//   .then(json => console.log(json));
// fetch('https://github.com/')
//   .then(res => res.text())
//   .then(body => console.log(body));
// fetch('https://api.github.com/users/brendapsd').then((res) => {
//   return res.json(); 
// }).then((json) => {
//   console.log(json); 
// }); 
// fetch('https://github.com/')
//   .then(res => {
//     console.log(res.ok);
//     console.log(res.status);
//     // console.log(res.statusText);
//     // console.log(res.headers.raw());
//     // console.log(res.headers.get('content-type'));
//   });