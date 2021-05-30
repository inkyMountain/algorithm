import {threeSum} from './threeSum';

test('three sum 1', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test('three sum 2', () => {
  expect(threeSum([0, 0, 0, 0])).toStrictEqual([[0, 0, 0]]);
});

test('three sum 3', () => {
  expect(threeSum([1, -1, -1, 0])).toStrictEqual([[-1, 0, 1]]);
});
