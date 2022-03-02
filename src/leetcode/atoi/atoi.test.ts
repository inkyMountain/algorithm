import {myAtoi} from './atoi'

describe('myAtoi', () => {
  test('myAtoi1', () => {
    expect(myAtoi('123')).toStrictEqual(123)
  })
  test('myAtoi2', () => {
    expect(myAtoi('   123')).toStrictEqual(123)
  })
  test('myAtoi3', () => {
    expect(myAtoi('4294967301')).toStrictEqual(2147483647)
    expect(myAtoi('-4294967301')).toStrictEqual(-2147483648)
  })
  test('myAtoi4', () => {
    expect(myAtoi('   -123')).toStrictEqual(-123)
  })
  test('myAtoi5', () => {
    expect(myAtoi('words and 987')).toStrictEqual(0)
  })
})
