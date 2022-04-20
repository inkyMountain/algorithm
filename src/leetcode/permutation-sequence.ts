/*
 * @lc app=leetcode.cn id=60 lang=typescript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * 使用 products 数组保存阶乘结果，products[i] 代表 i!。
 *
 * n = 3, k = 3
 * 123
 * 132
 * 213
 * 231
 * 312
 * 321
 * products: [x, 1, 2, 6]
 * Math.floor(k / products[2])
 * k % products[2]
 * 本题可以逐位确定数字。以 n = 3, k = 5 为例，观察以 1 开头的所有数字，
 * 其个数等于 2 和 3 的所有排列数。因此可以预处理出 [1, n] 的阶乘结果，
 * 可以快速查出 2! 的结果，为 2。
 * 由于 Math.floor(5 / 2) 结果为 2，说明总共有 2 组 2! 个排列被跳过。
 * 所以第一位数字就是 3。此时将 k 赋值为 k % 2!，继续进行下一位置的计算。
 * 有一个重要的细节是：如果 k 和 2! 相等，说明是 2! 个组合中的最后一个数字，需要特别处理。
 * 比如 k = 5, t! = 5，那么当前位数的数字是第一个数字而不是第二个数字。
 * 如果 k = 5, t! = 4，那么应该是第二个数字，即第二组的首位。
 * （这里的k和t!并不是实际会出现的值，只是为了说明大小关系。
 */
function getPermutation(n: number, k: number): string {
  const products = new Array(n + 1).fill(1)
  for (let i = 2; i <= n; i++) {
    products[i] = products[i - 1] * i
  }

  const nums = new Array(n)
  for (let i = 1; i <= n; i++) {
    nums[i - 1] = i
  }

  const result = new Array(n).fill(0)
  for (let length = n; length > 1; length--) {
    /**
     * nums:       [2, 3]
     * length:     3   2  1
     * product:    2   1
     * index:      0   0
     * num:        1   2
     * remainder:  1   0
     * k:          3   1  0
     * result:     [1, 2, ]
     */
    const product = products[length - 1]
    const remainder = k % product
    // remainder 为 0 需要特别处理。比如 k = 2, 2!也为 2，那么应该是132而不是213。
    const index =
      remainder === 0 ? Math.floor(k / product) - 1 : Math.floor(k / product)
    result[n - length] = nums.splice(index, 1)[0]
    k = remainder
  }
  result[result.length - 1] = nums[0]
  return result.join('')
}
// @lc code=end

console.log(getPermutation(3, 3))
console.log(getPermutation(3, 4))
