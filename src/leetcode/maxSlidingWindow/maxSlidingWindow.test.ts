import {maxSlidingWindow} from './maxSlidingWindow';

test('maxSlidingWindow0', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([
    3,
    3,
    5,
    5,
    6,
    7,
  ]);
});

test('maxSlidingWindow1', () => {
  expect(maxSlidingWindow([1], 1)).toStrictEqual([1]);
});

test('maxSlidingWindow2', () => {
  expect(maxSlidingWindow([1, -1], 1)).toStrictEqual([1, -1]);
});

test('maxSlidingWindow3', () => {
  expect(maxSlidingWindow([4, -2], 2)).toStrictEqual([4]);
});
