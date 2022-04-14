/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * 2 3 5
 * 1 2 3 4 5 6 8 9 10 12 15
 * 2：1 2 4 6
 * 3：1 3 9
 * 5：1 5
 * 这道题需要发现的规律是什么？
 * 观察 1 2 3 4 5 6 和 8 9 10 12 15 这两个数列（分别称为数列A和数列B），
 * 将A中的每个数分别乘以 2 3 5，它们的结果中就包含了B中的每个数字。
 * 为了从小到大地得到下一个丑数，维护三个指针，
 * 分别代表当前数字乘以2，乘以3，乘以5的结果。
 * 每次取这三个结果中的最小值，作为下一个丑数。
 * 结果被选为下一个丑数的指针，往前移动一位。
 * 大部分情况下是仅有一个指针往前移动一位，但也有>=2个指针往前移动的情况。
 * 比如当结果是15时，乘以3的指针在5，乘以5的指针在3，它们产生的结果都是15。
 * 这时候它们都要往前移动一位。
 */
function nthUglyNumber(n: number): number {
  // why n + 1?
  // 这里 dp[i] 的含义是第 i 个丑数。dp[0] 是没有意义的，仅占位。
  // 初始化可以是任意数字。本次dp由于不会使用到默认值的情况，所以如何初始化是没有影响的。
  const dp = new Array(n + 1).fill(0)
  // 由于 dp[0] 是没有意义的，所以 dp 初始化从 1 开始。
  dp[1] = 1
  let pointer2 = 1
  let pointer3 = 1
  let pointer5 = 1
  // 第一个丑数（也就是 1）已经手动初始化完成了，然后这里需要从第二个丑数开始循环生成。
  for (let i = 2; i <= n; i++) {
    const x2 = dp[pointer2] * 2
    const x3 = dp[pointer3] * 3
    const x5 = dp[pointer5] * 5
    const min = Math.min(x2, x3, x5)
    dp[i] = min
    if (x2 === min) {
      pointer2++
    }
    if (x3 === min) {
      pointer3++
    }
    if (x5 === min) {
      pointer5++
    }
  }
  return dp[n]
}

// @lc code=end
