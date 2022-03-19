function findTargetSumWays(nums: number[], target: number): number {
  const dp = []
  const sum = nums.reduce((accumulation, weight) => weight + accumulation)
  // the bag's capacity
  const capacity = (sum + target) / 2
  if ((sum + target) % 2 === 1) {
    return 0
  }
  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = capacity; j >= nums[i]; j--) {
      const way1 = dp[j - nums[i]] ?? 0
      const way2 = dp[j] ?? 0
      dp[j] = way1 + way2
    }
  }
  return dp[dp.length - 1]
}

export {findTargetSumWays}

// /*
//  * @lc app=leetcode.cn id=494 lang=typescript
//  *
//  * [494] 目标和
//  */

// // @lc code=start
// function findTargetSumWays(nums: number[], target: number): number {
//   const sum = nums.reduce((cumulate, num) => {
//     return cumulate + num
//   }, 0)
//   if (((sum + target) & 1) === 1) {
//     return 0
//   }
//   // bag capacity, nums is objects
//   const positiveSum = (sum + target) / 2
//   const dp = new Array(nums.length).fill(0).map(() => {
//     // return new Array(positiveSum + 1).fill(0)
//     return []
//   })

//   // i 为 -1 表示，当一个数字也没有时，总共有几种方法可以填填满背包。
//   dp[-1] = []
//   dp[-1][0] = 1
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j <= positiveSum; j++) {
//       // 如果背包能装下物品
//       if (j >= nums[i]) {
//         dp[i][j] = (dp[i - 1]?.[j - nums[i]] ?? 0) + (dp[i - 1]?.[j] ?? 0)
//       } else {
//         dp[i][j] = dp[i - 1]?.[j] ?? 0
//       }
//     }
//   }

//   return dp[nums.length - 1][positiveSum] ?? 0
// }
// // @lc code=end

// test('target sum', () => {
//   expect(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toStrictEqual(256)
//   expect(findTargetSumWays([1], 1)).toStrictEqual(1)
//   expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toStrictEqual(5)
// })

