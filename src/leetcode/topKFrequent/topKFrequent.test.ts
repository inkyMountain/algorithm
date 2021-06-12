import {topKFrequent} from './topKFrequent';

test('topKFrequent0', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
});

test('topKFrequent1', () => {
  expect(topKFrequent([1], 1)).toStrictEqual([1]);
});

test('topKFrequent2', () => {
  expect(topKFrequent([-1,-1], 1)).toStrictEqual([-1]);
});
