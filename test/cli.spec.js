import { showConsole } from '../src/cli.js';
import { convertRelativeToAbsolute } from '../src/controller/path.js';

const input = convertRelativeToAbsolute('./test/testPrueba/file6.md');

const output = 'Total:6\nUnique:6\nBroken:1';

const output1 = `File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://es.wikipediaXX.org/wiki/Markdown
message: Not Found
status: 
text: Markdown
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/
message: OK
status: 200
text: Node.js
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://semver.org/
message: OK
status: 200
text: Semver
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/en/
message: OK
status: 200
text: Node.js
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/api/fs.html
message: OK
status: 200
text: File System
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://daringfireball.net/projects/markdown/synx
message: Fail
status: 404
text: Markdown
`;

const output2 = 'Total:6\nUnique:6';

const output3 = `File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://es.wikipediaXX.org/wiki/Markdown
Text: Markdown
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/
Text: Node.js
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://semver.org/
Text: Semver
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/en/
Text: Node.js
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://nodejs.org/api/fs.html
Text: File System
File: ${convertRelativeToAbsolute('./test/testPrueba/file6.md')}
href: https://daringfireball.net/projects/markdown/synx
Text: Markdown
`;


describe('showConsole', () => {
  it('Deberia ser una función', () => {
    expect(typeof showConsole).toBe('function');
  });
  it('Deberia mostrar en consola el total de links, links unicos y links rotos', (done) => {
    showConsole(input, '--validate', '--stats').then((resolve) => {
      expect(resolve).toEqual(output);
      done();
    });
  }); 
  it('Deberia mostrar en consola file, href, message, status, text', (done) => {
    showConsole(input, '--validate').then((resolve) => {
      expect(resolve).toEqual(output1);
      done();
    });
  }); 
  it('Deberia mostrar en consola el total de links, links unicos', (done) => {
    showConsole(input, '--stats').then((resolve) => {
      expect(resolve).toEqual(output2);
      done();
    });
  }); 
  it('Deberia mostrar en consola file, href, text', (done) => {
    showConsole(input).then((resolve) => {
      expect(resolve).toEqual(output3);
      done();
    });
  });
});