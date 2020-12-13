import sort from './sorts/merge';

test('merge sort', () => {
  expect(sort([2, 1, 3])).toStrictEqual([1, 2, 3]);
});
