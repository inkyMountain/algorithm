/*
 * @lc app=leetcode.cn id=1497 lang=typescript
 *
 * [1497] 检查数组对是否可以被 k 整除
 */

// @lc code=start
function canArrange(arr: number[], k: number): boolean {
  /**
   * (a + b) % k = 0
   *
   * k === 5
   * 1 2 3 4 5  6 7 8 9 10
   * 1 2 3 4 0  1 2 3 4 0
   *
   * 1: 2
   * 2: 2
   * 3: 2
   * 4: 2
   *
   * k === 5
   * 1 2 3 4 5  -6 7 -8 9 10
   * 1 2 3 4 0  4 2 2 4 0
   *
   * 1: 2
   * 2: 2
   * 3: 2
   * 4: 2
   *
   * 首先将 nums[i] 转化为 nums[i] % k，这是因为 %= k 的操作并不会影响两个数相加后的余数。
   * 需要注意如果 nums[i] 是负数，则需要额外 += k。比如 nums[i] === -8，k === 5，那么需要
   * k = nums[i] % k + k。如果 nums[i] 是非负数，就不需要 + k 的操作。
   * 然后遍历数组，统计每个数字出现的次数。
   * 再次遍历，对于 nums[i]，检查 k - nums[i] 的出现次数是否与 nums[i] 的出现次数相同。
   * 如果每一个 nums[i] 都符合要求，那就意味着数组是满足要求的。否则提前返回 false。
   */
  const remainders = arr.map((num) => {
    const remainder = num % k
    return remainder < 0 ? remainder + k : remainder
  })
  const numberFrequency = new Map<number, number>()
  for (let i = 0; i < remainders.length; i++) {
    const original = numberFrequency.get(remainders[i]) || 0
    numberFrequency.set(remainders[i], original + 1)
  }
  for (const num of numberFrequency.keys()) {
    if (num === 0) {
      if (numberFrequency.get(num) % 2 === 1) {
        return false
      } else {
        continue
      }
    }
    const pair = k - num
    if (numberFrequency.get(pair) !== numberFrequency.get(num)) {
      return false
    }
  }
  return true
}
// @lc code=end

describe('check-if-array-pairs-is-divisible-by-k', () => {
  test('1', () => {
    expect(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)).toStrictEqual(true)
  })
})
