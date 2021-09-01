import {combinationSum4} from './combinationSum4'

test('combinationSum4 0', () => {
  expect(combinationSum4([1, 2, 3], 4)).toStrictEqual(7)
})

test('combinationSum4 1', () => {
  expect(combinationSum4([9], 3)).toStrictEqual(0)
})
