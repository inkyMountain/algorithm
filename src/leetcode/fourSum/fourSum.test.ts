import {fourSum} from './fourSum';

test('four sum', () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
});
