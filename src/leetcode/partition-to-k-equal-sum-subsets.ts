/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
function canPartitionKSubsets(nums: number[], k: number): boolean {
  const N = nums.length
  const sum = nums.reduce((sum, num) => sum + num, 0)
  const subsetSum = sum / k
  nums.sort((a, b) => a - b)
  const MAX_STATE = (1 << N) - 1 // 1 <= N <= 16
  let dp = new Array(MAX_STATE + 1).fill(null)
  dp[0] = 0
  /**
   * 枚举所有状态，对于当前状态，共有 N 种可能的上一状态。
   * 所以可以通过 N 次枚举，找出可能的状态转移，算出当前选中的数字的和。
   * 假设 N 为 4，当前状态为 0101，首先使用 0001，
   * 与当前状态做 ^ 运算，结果为 0100。
   * 注意，由于这里使用 0001 做 ^ 运算，当前状态的最后一位必须是 1。
   * 如果是 0，代表当前位的数字没有被选中，当前状态不可能成立。
   * 这样一来，每次寻找 prevState 时，都是将某一位的 1 变成 0。
   * 由于 state 是从小到大遍历的，所以 prevState 一定先于 state 被处理。
   */
  for (let state = 1; state <= MAX_STATE; ++state) {
    // O(2^N)
    // i 用于寻找 prevState
    for (let i = 0; i < N; ++i) {
      // O(N)
      const iBit = 1 << i
      // 如果 state 表示未选取 nums[i] ，说明不能达到 (state, i) 状态
      if ((state & iBit) === 0) {
        continue
      }
      // iBit 是一个只有一位是 1，其它位置都是 0 的数字。
      // state ^ iBit 可以将 state 中，iBit 为 1 的那位反转，
      // 并保持其它位数不变。
      const prevState = state ^ iBit
      // NOTICE: 如果不能到达 prevState 状态
      if (dp[prevState] === null) {
        continue
      }
      // NOTICE:
      // prevSubsetSum 表示在 prevState 状态下，正在填充的子集的和。
      // 想象依次填满 k 个子集，使其和为 subsetSum 。
      const prevSubsetSum = dp[prevState] % subsetSum
      // 最优性剪枝优化：nums 已升序排序，如果 nums[i] 已偏大，后续更加偏大，无需尝试
      if (prevSubsetSum + nums[i] > subsetSum) {
        break
      }
      dp[state] = dp[prevState] + nums[i]
      // 只要找到一个 prevState 能算出 dp[state] 即可，其它 prevState 算出的结果也一样，
      // 都是 state 表示的已选取的所有整数的和。
      break
    }
  }
  return dp[MAX_STATE] === sum
}
// @lc code=end

describe('partition-to-k-equal-sum-subsets', () => {
  test('1', () => {
    expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toStrictEqual(true)
  })
})
