import {violentIsPrime} from './searchInsert';

test('violentIsPrime', () => {
  expect(violentIsPrime(1)).toBeFalsy();
  expect(violentIsPrime(2)).toBeTruthy();
  expect(violentIsPrime(3)).toBeTruthy();
  expect(violentIsPrime(4)).toBeFalsy();
  expect(violentIsPrime(5)).toBeTruthy();
});
