import countPrime, {isPrime} from './countPrime';

test('isPrime', () => {
  expect(isPrime(1)).toBeFalsy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(5)).toBeTruthy();
});

test('countPrime', () => {
  expect(countPrime.defaultSolution(2)).toEqual(0);
  expect(countPrime.defaultSolution(3)).toEqual(1);
  expect(countPrime.defaultSolution(4)).toEqual(2);
  expect(countPrime.defaultSolution(5)).toEqual(2);
});
