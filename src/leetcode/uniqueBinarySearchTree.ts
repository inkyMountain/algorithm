// https://leetcode-cn.com/problems/unique-binary-search-trees/

/**
 * time complexity: O(?)
 * space complexity: O(?)
 */
// export function numTrees(n: number): number {
//   const dp = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     let sum = 0
//     for (let j = 1; j <= i; j++) {
//       const left = dp[j - 1]
//       const right = dp[i - j]
//       if (left === 0) {
//         sum += right
//       }
//       if (right === 0) {
//         sum += left
//       }
//       if (left !== 0 && right !== 0) {
//         sum += right * left
//       }
//     }
//     dp[i] = sum
//   }

//   return dp[n]
// }

/*
 * @lc app=leetcode.cn id=96 lang=typescript
 *
 * [96] 不同的二叉搜索树
 */
// @lc code=start
function numTrees(n: number): number {
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
      const left = dp[j - 1]
      const right = dp[i - j]
      if (left === 0) {
        sum += right
      } else if (right === 0) {
        sum += left
      } else {
        sum += left * right
      }
    }
    dp[i] = sum
  }
  return dp[n]
}
// @lc code=end
test('unique binary search tree', () => {
  expect(numTrees(0)).toStrictEqual(0)
  expect(numTrees(1)).toStrictEqual(1)
  expect(numTrees(2)).toStrictEqual(2)
  // 2 + 1 + 2 = 5
  expect(numTrees(3)).toStrictEqual(5)
  expect(numTrees(4)).toStrictEqual(14)
})
