import {arrayIntersection} from './arrayIntersection';

test('sumIndexOfTarget', () => {
  expect(arrayIntersection([1, 2, 2, 1], [1, 2])).toStrictEqual([1, 2]);
  expect(arrayIntersection([9, 4, 9, 8, 4], [4, 9, 5])).toStrictEqual([4, 9]);
});
