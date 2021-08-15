 function lastStoneWeightII(stones: number[]): number {
  const dp = []
  const sum = stones.reduce((accumulation, weight) => weight + accumulation)
  const halfSum = Math.floor(sum / 2)
  for (let i = 0; i <= halfSum; i++) {
    dp[i] = 0
  }
  for (let i = 0; i < stones.length; i++) {
    for (let j = halfSum; j >= stones[i]; j--) {
      // dp[i][j] = Math.max(dp[i - 1][j - stones[i]] + weights[i], dp[i - 1][j])
      dp[j] = Math.max(dp[j - stones[i]] + stones[i], dp[j])
    }
  }
  const smaller = dp[dp.length - 1]
  const bigger = sum - smaller
  return bigger - smaller
}

export {
  lastStoneWeightII
}

