import { getMDLinks, getMDFiles } from './path.js';

const fetch = require('node-fetch');

const linksValidate = (arrObjLinks) => { 
  const travelArrObjLinks = arrObjLinks.forEach((linksOfArray) => {
    return new Promise((resolve, reject) => {
      fetch(linksOfArray.href)
        .then(result => {
          if (result.status >= 200 && result.status < 400) {
            linksOfArray.status = result.status;
            linksOfArray.message = result.status; 
            resolve(linksOfArray);
          } else {
            linksOfArray.status = result.status;
            linksOfArray.message = 'Fail'; 
            resolve(linksOfArray);
          }
        }).catch(error => {
          return reject(error);
        });
    });
  });
  return Promise.all(travelArrObjLinks); 
};

// linksValidate(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md'))); 

console.log(linksValidate(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba'))));

// fetch('https://api.github.com/users/github')
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
