type CountPrimes = (num: number) => number

// https://leetcode-cn.com/problems/count-primes/
// 统计小于给定数字num的质数数量
// 输入：n = 10
// 输出：4
// 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
const countPrimes: CountPrimes = (num: number) => {
  let primeAmount = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      primeAmount++;
    }
  }
  return primeAmount;
};

// 判断给定的数字是否是一个质数
const isPrime = (num: number) => {
  if (num <= 1) return false
  for (let i = 2; i * i<= num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
};

export default {
  defaultSolution: countPrimes
};

export {
  isPrime
};
