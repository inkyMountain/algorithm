import {numSquares} from './perfectSquares'

test('numSquares0', () => {
  expect(numSquares(12)).toStrictEqual(3)
})

test('numSquares1', () => {
  expect(numSquares(13)).toStrictEqual(2)
})
