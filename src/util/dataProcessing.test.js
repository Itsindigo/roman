import { convertToRomanNumeral } from './dataProcessing';

test('returns X for 10', () => {
    expect(convertToRomanNumeral(10)).toBe('X')
})

test('returns C for 100', () => {
    expect(convertToRomanNumeral(100)).toBe('C')
})

test('returns M for 1000', () => {
    expect(convertToRomanNumeral(1000)).toBe('M')
})

test('returns IX for 9', () => {
    expect(convertToRomanNumeral(9)).toBe('IX')
})

test('returns XC for 90', () => {
    expect(convertToRomanNumeral(90)).toBe('XC')
})

test('returns CX for 110', () => {
    expect(convertToRomanNumeral(110)).toBe('CX')
})

test('Non valid ints are returned', () => {
    expect(convertToRomanNumeral('string')).toBe('string')
})