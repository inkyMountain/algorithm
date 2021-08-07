import {integerBreak} from './integerBreak'

test('integerBreak0', () => {
  expect(integerBreak(2)).toStrictEqual(1)
})

test('integerBreak1', () => {
  expect(integerBreak(10)).toStrictEqual(36)
})

test('integerBreak2', () => {
  expect(integerBreak(4)).toStrictEqual(4)
})
