/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * 为什么这题可以使用动态规划？
 * 因为当先手玩家取了一张牌后，后手玩家仍是从开头或者结尾取一张牌。
 * 取完一张牌后，剩下的数字仍是与取牌前相同的问题，即转化成了一个解决方案相等的子问题。
 * 这就是递归法和动态规划擅长的问题。
 * 
 * 在本解法中，dp[i][j]代表当问题转化为，以i开头，j结尾的子数组，
 * 两位玩家都取完牌后，先手玩家的牌总和，比后手玩家牌总和大多少。
 * 假设先手玩家取了i牌，那么数组变成了[i + 1, j]，此时情况转变为，
 * 在 [i, j] 范围内的先手玩家，变成了后手玩家，原来的后手成为了先手。
 * 那么在 [i + 1, j] 范围内，先手玩家(原后手玩家)最多比后手玩家(原先手玩家)
 * 的牌总和大了 dp[i + 1][j] 点。
 * 
 * 假设先手玩家取了j牌，那么[i, j - 1]范围内的先手玩家，
 * 最多可以领先后手玩家 dp[i][j - 1] 点数值。
 * 
 * 那么最终先手玩家在 [i, j] 范围内，可以比后手玩家领先的数值是：
 * dp[i][end] = Math.max(
 *  nums[i] - dp[i + 1][j],
 *  nums[j] - dp[i][j - 1]
 * )
 */
function PredictTheWinner(nums: number[]): boolean {
  const length = nums.length
  const dp = new Array(length).fill(0).map(() => {
    return new Array(length).fill(0)
  })
  for (let i = 0; i < length; i++) {
    dp[i][i] = nums[i]
  }
  for (let start = length - 1; start >= 0; start--) {
    for (let end = start + 1; end < length; end++) {
      dp[start][end] = Math.max(
        nums[start] - dp[start + 1][end],
        nums[end] - dp[start][end - 1]
      )
    }
  }
  return dp[0][length - 1] >= 0
}
// @lc code=end
