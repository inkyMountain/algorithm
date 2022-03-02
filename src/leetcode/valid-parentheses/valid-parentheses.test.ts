import {isValid} from './valid-parentheses'

describe('isValid', () => {
  test('isValid1', () => {
    expect(isValid('()')).toBeTruthy()
  })
  test('isValid2', () => {
    expect(isValid('()]')).toBeFalsy()
  })
  test('isValid3', () => {
    expect(isValid('[')).toBeFalsy()
  })
})
