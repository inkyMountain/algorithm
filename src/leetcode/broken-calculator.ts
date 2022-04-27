/*
 * @lc app=leetcode.cn id=991 lang=typescript
 *
 * [991] 坏了的计算器
 */

// @lc code=start
/**
 * 使用逆向思维，target 可以采取 +1 或者 /2 的操作，令其尽快接近 startValue。
 * 因此优先使用 /2，无法/2才使用 +1 操作。
 */
function brokenCalc(startValue: number, target: number): number {
  let operationCount = 0
  while (target > startValue) {
    if ((target & 1) === 0) {
      target /= 2
    } else {
      target += 1
    }
    operationCount++
  }
  return operationCount + startValue - target
}
// @lc code=end
