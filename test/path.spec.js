import { convertRelativeToAbsolute, pathIsAbsolute, pathIsDirectory, pathIsFile, readDirectory, getMDFiles, readFiles, getMDLinks } from '../src/controller/path.js';

const arrObjLinks = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://semver.org/',
    text: 'Semver',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://daringfireball.net/projects/markdown/syntax',
    text: 'Markdown',
    file:
 'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md' },
  { href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file:
  'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba1\\file2.md' },
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
  'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba1\\prueba1.1\\file3.md' },
  { href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file:
  'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba2\\file4.md' },
  { href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'módulos (CommonJS)',
    file:
  'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba2\\file4.md' }
]; 

describe('convertRelativeToAbsolute', () => {
  it('Deberia ser una función', () => {
    expect(typeof convertRelativeToAbsolute).toBe('function');
  });
  it('Deberia convertir una ruta relativa a absoluta', () => {
    expect(convertRelativeToAbsolute('.\\test')).toBe('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test');
  });
});
describe('pathIsAbsolute, pathIsDirectory, pathIsFile', () => {
  it('Deberia retornar true ya que la ruta es absoluta', () => {
    expect(pathIsAbsolute('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test')).toBe(true);
  });
  it('Deberia retornar true ya que la ruta es directorio', () => {
    expect(pathIsDirectory('.\\test')).toBe(true);
  });
  it('Deberia retornar true ya que la ruta es archivo', () => {
    expect(pathIsFile('.\\test\\testPrueba\\file.js')).toBe(true);
  });
}); 
describe('readDirectory, getMDFiles, getMDLinks', () => {
  it('Deberia retornar un array con los archivos y carpetas de la ruta', () => {
    expect(readDirectory('.\\test\\testPrueba')).toEqual(['file.js', 'file6.md', 'prueba1', 'prueba2']);
  });
  it('Deberia retornar el array de archivos MD', () => {
    expect(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')).toEqual([
      'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md'
    ]);
  });
  it('Deberia retornar el array de archivos MD de la carpeta', () => {
    expect(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba')).toEqual([
      'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md', 
      'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba1\\file2.md',
      'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba1\\prueba1.1\\file3.md',
      'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba2\\file4.md'
    ]);
  });
  it('Deberia retornar el array de objetos con el href, text, file de los archivos MD', () => {
    expect(getMDLinks(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba'))).toEqual(arrObjLinks);
  });
});