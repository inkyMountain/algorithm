// https://leetcode-cn.com/problems/perfect-squares/

export function numSquares(n: number): number {
  const nums = Math.floor(Math.sqrt(n))
  const squares = new Array(nums)
    .fill(0)
    .map((_, index) => Math.pow(index + 1, 2))
  const dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 0; i < squares.length; i++) {
    for (let j = squares[i]; j <= n; j++) {
      dp[j] = Math.min(dp[j], dp[j - squares[i]]  + 1)
    }
  }

  return dp[n]
}
