import {isMatch} from './regular-expression-matching'

describe('regular-expression-matching', () => {
  test('1', () => {
    expect(isMatch('aa', 'a')).toBeFalsy()
  })
  test('2', () => {
    expect(isMatch('s', 's*')).toBeTruthy()
  })
  test('3', () => {
    expect(isMatch('aab', 'c*a*b')).toBeTruthy()
  })
  test('4', () => {
    expect(isMatch('aaa', 'aaaa')).toBeFalsy()
  })
})
