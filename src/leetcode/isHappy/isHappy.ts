// https://leetcode-cn.com/problems/happy-number/

const getNext = (num: number) => {
  let sum = 0;
  while (num > 0) {
    const digit = num % 10;
    sum += digit * digit;
    num = (num - digit) / 10;
  }
  return sum;
};

export const isHappy = (num: number): boolean => {
  let fast = num,
    slow = num;
  do {
    // Slow pointer's step is 1, fast pointer's step is 2.
    // So fast needs calling getNext() twice.
    slow = getNext(slow);
    fast = getNext(fast);
    fast = getNext(fast);
  } while (fast !== slow);
  return fast === 1;
};
