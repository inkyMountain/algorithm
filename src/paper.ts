function numTrees(n: number): number {
  const dp = [0, 1, 2]
  for (let i = 3; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= n; j++) {
      const left = dp[j - 1]
      const right = dp[n - j]
      sum = sum + left * right
    }
    dp[i] = sum
  }
  return dp[n]
}

numTrees(3)
