import { convertRelativeToAbsolute, pathIsAbsolute, pathIsFile } from '../lib/controller/path.js'

describe('convertRelativeToAbsolute', () => {
    it ('Deberia ser una función', () => {
        expect(typeof convertRelativeToAbsolute).toBe('function')
    })
    it ('Deberia ser retornar false ya que la ruta es relativa', () => {
        expect(pathIsAbsolute('.\\test')).toBe(false)
    })
    it ('Deberia convertir una ruta relativa a absoluta', () => {
        expect(convertRelativeToAbsolute('.\\test')).toBe('C:\\Users\\brenda\\Documents\\project markdown\\LIM008-fe-md-links\\test')
    })
})
