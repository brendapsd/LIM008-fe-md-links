import { convertRelativeToAbsolute, pathIsAbsolute, pathIsDirectory, pathIsFile, readDirectory, getMDFiles, readFiles } from '../src/controller/path.js'

describe('convertRelativeToAbsolute', () => {
    it ('Deberia ser una función', () => {
        expect(typeof convertRelativeToAbsolute).toBe('function')
    })
    it ('Deberia retornar false ya que la ruta es relativa', () => {
        expect(pathIsAbsolute('.\\test')).toBe(false)
    })
    it ('Deberia retornar true ya que la ruta es relativa', () => {
        expect(pathIsAbsolute('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test')).toBe(true)
    })
    it ('Deberia retornar true ya que la ruta es directorio', () => {
        expect(pathIsDirectory('.\\test')).toBe(true)
    })
    it.only ('Deberia convertir una ruta relativa a absoluta', () => {
        expect(convertRelativeToAbsolute('.\\test')).toBe('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test')
    })
    it ('Deberia retornar false ya que la ruta es directorio', () => {
        expect(pathIsDirectory('.\\test\\testPrueba\\file.js')).toBe(false)
    })
    it ('Deberia retornar true ya que la ruta es archivo', () => {
        expect(pathIsFile('.\\test\\testPrueba\\file.js')).toBe(true)
    })
    it ('Deberia retornar un array con los archivos y carpetas de la ruta', () => {
        expect(readDirectory('.\\test\\testPrueba')).toEqual(['file.js','file6.md','prueba1','prueba2'])
    })
    it ('Deberia retornar el array de archivos .MD', () => {
        expect(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')).toEqual([
            'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md'
        ])
    })
    it ('Deberia retornar el array de archivos .MD de la carpeta', () => {
        expect(getMDFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba')).toEqual([
            'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md', 
            'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba1\\file2.md',
            'C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\prueba2\\file4.md'
        ])
    })
    // it ('Deberia retornar la cadena de texto del archivo .MD', () => {
    //     expect(readFiles('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test\\testPrueba\\file6.md')).toEqual(
    //     `Hola soy el archivo md file6.md`)
    // })
    
})