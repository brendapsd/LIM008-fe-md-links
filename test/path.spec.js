import { convertRelativeToAbsolute, pathIsAbsolute, pathIsDirectory, pathIsFile, readDirectory } from '../lib/controller/path.js'

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
    it ('Deberia convertir una ruta relativa a absoluta', () => {
        expect(convertRelativeToAbsolute('.\\test')).toBe('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test')
    })
    it ('Deberia retornar true ya que la ruta es directorio', () => {
        expect(pathIsDirectory('.\\test')).toBe(true)
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
})