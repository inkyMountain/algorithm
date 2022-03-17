/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    let aBase = 10,
      bBase = 10
    while (aBase <= b) {
      aBase *= 10
    }
    while (bBase <= a) {
      bBase *= 10
    }
    return bBase * b + a - (aBase * a + b)
  })
  const result = nums.join('')
  return result[0] === '0' ? '0' : result
  // nlogn *
}
// @lc code=end

console.log(
  largestNumber([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]),
  largestNumber([10, 2]),
  largestNumber([7, 608, 60, 5]),
  largestNumber([7, 603, 60, 5]),
  // "9534330"
  largestNumber([3, 30, 34, 5, 9]),
  largestNumber([111311, 1113]),

  // "83088308830"
  largestNumber([8308, 8308, 830])
)

test('largest-number', () => {
  expect(largestNumber([8308, 8308, 830])).toStrictEqual('83088308830')
  expect(largestNumber([3, 30, 34, 5, 9])).toStrictEqual('9534330')
})
