import {calcNumbers, findMaxForm} from './zeroAndOne'

test('findMaxForm0', () => {
  expect(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)).toStrictEqual(4)
})

test('findMaxForm1', () => {
  expect(findMaxForm(['10', '0', '1'], 1, 1)).toStrictEqual(2)
})

test('calcNumbers0', () => {
  const {ones, zeros} = calcNumbers('000111')
  expect(zeros).toStrictEqual(3)
  expect(ones).toStrictEqual(3)
})

test('calcNumbers1', () => {
  const {ones, zeros} = calcNumbers('')
  expect(zeros).toStrictEqual(0)
  expect(ones).toStrictEqual(0)
})

test('calcNumbers2', () => {
  const {ones, zeros} = calcNumbers('0')
  expect(zeros).toStrictEqual(1)
  expect(ones).toStrictEqual(0)
})

test('calcNumbers3', () => {
  const {ones, zeros} = calcNumbers('1111')
  expect(zeros).toStrictEqual(0)
  expect(ones).toStrictEqual(4)
})
