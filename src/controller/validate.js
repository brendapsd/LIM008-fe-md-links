import { getMDLinks, getMDFiles } from './path.js';

const fetch = require('node-fetch');

export const linksValidate = (arrObjLinks) => {  
  const travelArrObjLinks = arrObjLinks.map((linkObj) => {
    return new Promise((resolve, reject) => {
      fetch(linkObj.href)
        .then(response => {
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
          return reject(error);
        });
    });
  });
  
  return Promise.all(travelArrObjLinks);
};

// linksValidate(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')))
//   .then(res => console.log(res)); 

