import { totalLinksStats, uniqueLinksStats, brokenLinksStats } from '../src/controller/stats.js';
const path = require('path');

const arrObjLinksOK = [
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
       `${process.cwd()}\\test\\testPrueba\\file6.md`,
    status: 200,
    message: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
       `${process.cwd()}\\test\\testPrueba\\file6.md`,
    status: 200,
    message: 'OK' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
       `${process.cwd()}\\test\\testPrueba\\file6.md`,
    status: 200,
    message: 'OK' }, 
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
       `${process.cwd()}\\test\\testPrueba\\file6.md`,
    status: 404,
    message: 'Fail' }
];

describe('stats.js', () => {
  it('Deberia retornar el número total de links', () => {
    expect(totalLinksStats(arrObjLinksOK)).toBe(4);
  });
  it('Deberia retornar el número de links únicos', () => {
    expect(uniqueLinksStats(arrObjLinksOK)).toBe(3);
  });
  it('Deberia retornar el número de links únicos', () => {
    expect(brokenLinksStats(arrObjLinksOK)).toBe(1);
  });
});