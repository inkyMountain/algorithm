import sort from './merge';

test('merge sort', () => {
  expect(sort([2, 1, 3])).toStrictEqual([1, 2, 3]);
});
