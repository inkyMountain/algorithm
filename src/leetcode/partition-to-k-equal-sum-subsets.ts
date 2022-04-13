/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * 设 nums 长度为 N。目的是将 nums 划分到 k 个子集中。
 * 由于不关心某个数字到底被划分到哪一个子集，只在乎该数字是否已经被划分，
 * 于是可以依据 nums 中的每一个数字是否已经被划分到一个子集合中，
 * 列举出 2 ^ N 种情况。比如 N 为 4，那么 1000 表示第一位数字已经被划分到某个子集中，
 * 0100 表示第二位数字已经完成划分。
 * 对于其中某个状态，总是由上一状态转移而来。上一状态没有选中某个数字，
 * 而这一状态选中了这个数字。在这个转移过程中，需要满足选中这个数字后，有如下不等式成立，
 * 当前选中数字和 % subsetSum <= subsetSum
 * 因为一旦不满足该不等式，说明其中的一个子集，在选中这个数字后，超出了容量限制。
 * 这里 N 为 4，总共可以列举四种状态转移的方法。只要有任意一次状态转移，
 * 可以满足该不等式，就说明上一状态是可以转移到这一状态的。
 */
function canPartitionKSubsets(nums: number[], k: number): boolean {
  if (k === 1) {
    return true
  }
  const sum = nums.reduce((cumulate, num) => cumulate + num, 0)
  if (sum % k !== 0) {
    return false
  }
  const subsetSum = sum / k
  // 将数组从小到大排列，从而进行小幅的优化。
  nums.sort((a, b) => a - b)
  // 涉及到位运算的地方，务必注意运算的优先级！！！
  const MAX_STATE = (1 << nums.length) - 1
  // dp[i] 存储的是当前状态下，所有选中数字的和。
  const dp = new Array(MAX_STATE + 1).fill(null)
  dp[0] = 0
  for (let state = 0; state <= MAX_STATE; state++) {
    for (let i = nums.length - 1; i >= 0; i--) {
      const iBit = 1 << i
      // iBit  0010
      // state 1111
      const isCurrentNumNotSelected = (iBit & state) === 0
      if (isCurrentNumNotSelected) {
        continue
      }
      // iBit 是一个只有一位为 1 的数字，^ 运算可以将 state 中，与这个 1 对应的数字变成 0。
      // 结果就是没有选中当前数字的前一状态。
      const prevState = iBit ^ state
      // 前一状态无法达到，继续尝试下一个数字。
      if (dp[prevState] === null) {
        continue
      }
      const remainder = dp[prevState] % subsetSum
      // 当前数字加入后，当前子集的容量超了。
      // 由于数字递增，右侧的数字一定也超容量，所以不用继续尝试。
      if (remainder + nums[i] > subsetSum) {
        break
      }
      // 有一个满足就可以不用继续尝试下一个数字，
      // 因为 state 代表的选中数字的和是不会变的。
      dp[state] = dp[prevState] + nums[i]
      break
    }
  }

  return dp[dp.length - 1] === sum
  // 注意这里的判断条件，这条注释是之前犯过错误的地方。
  // 由于这里使用了滚动数组，所以dp的最后一位，可能是之前某个状态转移的时候填充的，
  // 并不是最后一轮循环的结果。所以必须判断是否等于 nums 的总和。
  // return dp[dp.length - 1] !== null
}
// @lc code=end

describe('partition-to-k-equal-sum-subsets', () => {
  test('1', () => {
    expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toStrictEqual(true)
    expect(canPartitionKSubsets([2, 2, 2, 2, 3, 4, 5], 4)).toStrictEqual(false)
  })
})

// 下面是抄力扣的某个题解，上面的是自己凭记忆重新写的。
// function canPartitionKSubsets(nums: number[], k: number): boolean {
//   if (k === 1) {
//     return true
//   }
//   const N = nums.length
//   const sum = nums.reduce((sum, num) => sum + num, 0)
//   const subsetSum = sum / k
//   if (sum % k !== 0) {
//     return false
//   }
//   nums.sort((a, b) => a - b)
//   if (nums[nums.length - 1] > subsetSum) {
//     return false
//   }
//   const MAX_STATE = (1 << N) - 1 // 1 <= N <= 16
//   let dp = new Array(MAX_STATE + 1).fill(null)
//   dp[0] = 0
//   /**
//    * 枚举所有状态，对于当前状态，共有 N 种可能的上一状态。
//    * 所以可以通过 N 次枚举，找出可能的状态转移，算出当前选中的数字的和。
//    * 假设 N 为 4，当前状态为 0101，首先使用 0001，
//    * 与当前状态做 ^ 运算，结果为 0100。
//    * 注意，由于这里使用 0001 做 ^ 运算，当前状态的最后一位必须是 1。
//    * 如果是 0，代表当前位的数字没有被选中，当前状态不可能成立。
//    * 这样一来，每次寻找 prevState 时，都是将某一位的 1 变成 0。
//    * 由于 state 是从小到大遍历的，所以 prevState 一定先于 state 被处理。
//    * 
//    * 另外，在力扣官解中，使用的是 state => nextState 的推导，
//    * 这与本解的思路基本类似，仅有细微差别，包括：
//    * - state 从 0 开始
//    * - MAX_STATE 为 1 << N
//    * - 循环中 state < MAX_STATE
//    * - state 的当前位需要是 0，如果与 iBit 的 | 操作不为 0 则 continue。
//    */
//   for (let state = 1; state <= MAX_STATE; ++state) {
//     // O(2^N)
//     // i 用于寻找 prevState
//     for (let i = 0; i < N; ++i) {
//       // O(N)
//       const iBit = 1 << i
//       // 如果 state 表示未选取 nums[i] ，说明不能达到 (state, i) 状态
//       if ((state & iBit) === 0) {
//         continue
//       }
//       // iBit 是一个只有一位是 1，其它位置都是 0 的数字。
//       // state ^ iBit 可以将 state 中，iBit 为 1 的那位反转，
//       // 并保持其它位数不变。
//       const prevState = state ^ iBit
//       // NOTICE: 如果不能到达 prevState 状态
//       if (dp[prevState] === null) {
//         continue
//       }
//       // NOTICE:
//       // prevSubsetSum 表示在 prevState 状态下，正在填充的子集的和。
//       // 想象依次填满 k 个子集，使其和为 subsetSum 。
//       const prevSubsetSum = dp[prevState] % subsetSum
//       // 最优性剪枝优化：nums 已升序排序，如果 nums[i] 已偏大，后续更加偏大，无需尝试
//       if (prevSubsetSum + nums[i] > subsetSum) {
//         break
//       }
//       dp[state] = dp[prevState] + nums[i]
//       // 只要找到一个 prevState 能算出 dp[state] 即可，其它 prevState 算出的结果也一样，
//       // 都是 state 表示的已选取的所有整数的和。
//       break
//     }
//   }
//   return dp[MAX_STATE] === sum
// }

// describe('partition-to-k-equal-sum-subsets', () => {
//   test('1', () => {
//     expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toStrictEqual(true)
//   })
// })

