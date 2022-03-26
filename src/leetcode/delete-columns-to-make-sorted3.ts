/*
 * @lc app=leetcode.cn id=960 lang=typescript
 *
 * [960] 删列造序 III
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
  const arrayLength = strs.length
  const strLength = strs[0].length
  const dp = new Array(strLength).fill(1)
  for (let i = 1; i < strLength; i++) {
    for (let j = 0; j < i; j++) {
      if (isGreaterThan(i, j, strs)) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return strLength - Math.max(...dp)
}

// if all chars in a is bigger than or equal to b
function isGreaterThan(a: number, b: number, strs: string[]): boolean {
  for (let i = 0; i < strs.length; i++) {
    // 如果其中一个不满足条件，则返回 false。
    if (strs[i].charCodeAt(b) > strs[i].charCodeAt(a)) {
      return false
    }
  }
  // 只有都满足条件，则返回 true。
  return true
}
// @lc code=end

describe('delete-columns-to-make-sorted3', () => {
  test('minDeletionSize', () => {
    expect(minDeletionSize(['abc', 'abc'])).toStrictEqual(0)
    expect(minDeletionSize(['abc', 'acb'])).toStrictEqual(1)
    expect(minDeletionSize(['babca', 'bbazb'])).toStrictEqual(3)
    expect(minDeletionSize(['abbba'])).toStrictEqual(1)
  })
})
