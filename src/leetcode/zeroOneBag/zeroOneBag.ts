export function zeroOneBag(): number {
  const values = [15, 20, 30]
  const weight = [1, 3, 4]
  const dp = values.map(() => 0)
  // the bag's capacity
  const bagWeight = 4

  for (let i = 0; i < values.length; i++) {
    // for (let j = bagWeight; j >= weight[i]; j--) {
    for (let j = bagWeight; j >= 0; j--) {
      const xxx = dp[j - weight[i]] ?? 0
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j] ?? 0,  xxx + values[i])
      } else {
        dp[j] = dp[j] ?? 0
      }
    }
  }
  console.log('dp ============>', dp);
  return dp[bagWeight]
}
