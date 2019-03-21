import { linksValidate } from '../src/controller/validate.js';
import { convertRelativeToAbsolute } from '../src/controller/path.js';

const arrObjLinks = [ 
  { href: 'https://es.wikipediaXX.org/wiki/Markdown',
    text: 'Markdown',
    file:
 convertRelativeToAbsolute('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
 convertRelativeToAbsolute('./test/testPrueba/file6.md') },
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
 convertRelativeToAbsolute('./test/testPrueba/file6.md') }
]; 
const arrObjLinksOK = [
  { href: 'https://es.wikipediaXX.org/wiki/Markdown',
    text: 'Markdown',
    file:
    convertRelativeToAbsolute('./test/testPrueba/file6.md'),
    status: '',
    message: 'Not Found' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
     convertRelativeToAbsolute('./test/testPrueba/file6.md'),
    status: 200,
    message: 'OK' }, 
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
     convertRelativeToAbsolute('./test/testPrueba/file6.md'),
    status: 404,
    message: 'Fail' }
];

describe('validate.js', () => {
  it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', (done) => {
    linksValidate(arrObjLinks).then((resolve) => {
      expect(resolve).toEqual(arrObjLinksOK); 
      done(); 
    });
  });
});  