/*
 * @lc app=leetcode.cn id=470 lang=typescript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */
function rand7() {
  return 1
}

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

function rand10(): number {
  let first, second
  // 随机产生一个 <= 6的整数。由于产生整数[1, 6]的概率是相同的，
  // 所以 (first & 1) === 1 为true或false的概率相等，各为50%
  // 这里也可以不用6，而是4或者2，它们都可以达到目的。
  // 但是这里采用6，可以更快地走出循环，减少rand7的调用次数。
  while ((first = rand7()) > 6) {}
  // 产生一个[1,5]的整数
  while ((second = rand7()) > 5) {}
  // 50%的几率落在 [1,5],50%的几率落在 [6, 10]，所以落在[1,10]整数的概率是相等的。
  return (first & 1) === 1 ? second : 5 + second
}
// @lc code=end

/**
 * 扩展知识：如何实现 rand11？
 * rand10 的实现方法，适用于 rand+偶数，比如rand8，rand6。
 * 如果需要实现rand+奇数，可以采用拒绝采样。
 * 比如rand11，可以等概率地产生 [1,6] [7,12] 的数字，当产生12时，
 * 拒绝这个数字，重新产生一个新的随机数字。
 * 由于这时候[1,11]产生的概率仍是相等的，也就实现了rand11。
 */
