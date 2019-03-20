import { showConsole } from '../src/cli.js';
// const path = require('path');

const input = path.resolve('./test/testPrueba/file6.md');

const output = 'Total:6\nUnique:6\nBroken:1';

describe('showConsole', () => {
  it('Deberia ser una función', () => {
    expect(typeof showConsole).toBe('function');
  });
  it('Deberia mostrar en consola el total de links, links unicos y links rotos', (done) => {
    // expect(showConsole('test/testPrueba/file6.md', '--validate', '--stast')).toEqual(output);
    showConsole(input, '--validate', '--stast').then((resolve) => {
      expect(resolve).toEqual(output);
      done();
    });
  }); 
});