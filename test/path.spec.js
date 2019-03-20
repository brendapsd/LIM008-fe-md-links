import { convertRelativeToAbsolute, pathIsAbsolute, pathIsDirectory, pathIsFile, readDirectory, getMDFiles, getMDLinks } from '../src/controller/path.js';
const path = require('path');

const arrObjLinks = [ 
  { href: 'https://es.wikipediaXX.org/wiki/Markdown',
    text: 'Markdown',
    file:
 path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://semver.org/',
    text: 'Semver',
    file:
 path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
 path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file:
 path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://daringfireball.net/projects/markdown/synx',
    text: 'Markdown',
    file:
 path.resolve('./test/testPrueba/file6.md') },
  { href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file:
  path.resolve('./test/testPrueba/prueba1/file2.md') },
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
  path.resolve('./test/testPrueba/prueba1/prueba1.1/file3.md') },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
  path.resolve('./test/testPrueba/prueba2/file4.md') },
  { href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file:
  path.resolve('./test/testPrueba/prueba2/file4.md') }
]; 

describe('convertRelativeToAbsolute', () => {
  it('Deberia ser una función', () => {
    expect(typeof convertRelativeToAbsolute).toBe('function');
  });
  it('Deberia convertir una ruta relativa a absoluta', () => {
    expect(convertRelativeToAbsolute('test/testPrueba/file6.md')).toBe(path.resolve('./test/testPrueba/file6.md'));
  });
});
describe('pathIsAbsolute, pathIsDirectory, pathIsFile', () => {
  it('Deberia retornar true ya que la ruta es absoluta', () => {
    expect(pathIsAbsolute(path.resolve('./test'))).toBe(true);
  });
  it('Deberia retornar true ya que la ruta es directorio', () => {
    expect(pathIsDirectory(path.resolve('./test'))).toBe(true);
  });
  it('Deberia retornar true ya que la ruta es archivo', () => {
    expect(pathIsFile(path.resolve('./test/testPrueba/file.js'))).toBe(true);
  });
}); 
describe('readDirectory, getMDFiles, getMDLinks', () => {
  it('Deberia retornar un array con los archivos y carpetas de la ruta', () => {
    expect(readDirectory(path.resolve('./test/testPrueba'))).toEqual(['file.js', 'file6.md', 'prueba1', 'prueba2']);
  });
  it('Deberia retornar el array de archivos MD', () => {
    expect(getMDFiles(path.resolve('./test/testPrueba/file6.md'))).toEqual([
      path.resolve('./test/testPrueba/file6.md')
    ]);
  });
  it('Deberia retornar el array de archivos MD de la carpeta', () => {
    expect(getMDFiles(path.resolve('./test/testPrueba'))).toEqual([
      path.resolve('./test/testPrueba/file6.md'), 
      path.resolve('./test/testPrueba/prueba1/file2.md'),
      path.resolve('./test/testPrueba/prueba1/prueba1.1/file3.md'),
      path.resolve('./test/testPrueba/prueba2/file4.md')
    ]);
  });
  it('Deberia retornar el array de objetos con las propiedades href, text, file de los archivos MD', () => {
    expect(getMDLinks(getMDFiles(path.resolve('./test/testPrueba')))).toEqual(arrObjLinks);
  });
});