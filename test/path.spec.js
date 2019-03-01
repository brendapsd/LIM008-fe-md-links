import { convertRelativeToAbsolute, pathIsAbsolute, pathIsDirectory } from '../lib/controller/path.js'

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
    it ('Deberia retornar true ya que la ruta es directorio', () => {
        expect(pathIsDirectory('.\\test\\testPrueba\\file.js')).toBe(false)
    })
})