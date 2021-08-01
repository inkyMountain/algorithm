// https://leetcode-cn.com/problems/climbing-stairs/

/**
 * 如何理解 dp 数组初始化？
 *
 * 如何理解这里的递推公式？
 * 爬楼梯到 n 层的方法由两种方式构成：
 * 1. 爬到 n - 1 层后，再往上爬一层。
 * 2. 爬到 n - 2 层后，再往上爬两层。
 * 所以可以得出，爬到第 n 层的方法总数 = (n - 1 层总数) + (n - 2 层总数)，
 * 也就是：dp[i] = dp[i - 1] + dp[i - 2]
 */
export function climbStairs(n: number): number {
  if (n <= 2) {
    return n
  }
  const dp = []
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
