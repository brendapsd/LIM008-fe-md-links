const arrObjLinksOK = [
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
       'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md',
    status: 200,
    message: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
       'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md',
    status: 200,
    message: 'OK' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
       'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md',
    status: 200,
    message: 'OK' }, 
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
       'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md',
    status: 404,
    message: 'Fail' }
];

export const totalLinksStats = (arrObjLinks) => {
  return arrObjLinks.length;
};
  
// console.log('total: ' + totalLinksStats(arrObjLinksOK));

export const uniqueLinksStats = (arrObjLinks) => {
  return new Set(arrObjLinks.map((links) => links.href)).size;
}; 
  
// console.log('unique: ' + uniqueLinksStats(arrObjLinksOK));

export const brokenLinksStats = (arrObjLinksValidate) => { 
  return arrObjLinksValidate.filter(link => link.status >= 400).length;
};

// console.log('broken: ' + brokenLinksStats(arrObjLinksOK));
