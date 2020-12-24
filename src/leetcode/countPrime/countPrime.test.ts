import countPrime, {violentIsPrime} from './countPrime';

test('violentIsPrime', () => {
  expect(violentIsPrime(1)).toBeFalsy();
  expect(violentIsPrime(2)).toBeTruthy();
  expect(violentIsPrime(3)).toBeTruthy();
  expect(violentIsPrime(4)).toBeFalsy();
  expect(violentIsPrime(5)).toBeTruthy();
});

test('countPrime violent', () => {
  expect(countPrime.violent(2)).toEqual(0);
  expect(countPrime.violent(3)).toEqual(1);
  expect(countPrime.violent(4)).toEqual(2);
  expect(countPrime.violent(5)).toEqual(2);
});

test('countPrime filter', () => {
  expect(countPrime.filter(2)).toEqual(0);
  expect(countPrime.filter(3)).toEqual(1);
  expect(countPrime.filter(4)).toEqual(2);
  expect(countPrime.filter(5)).toEqual(2);
});
