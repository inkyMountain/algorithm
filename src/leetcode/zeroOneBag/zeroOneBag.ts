// This is not a leetcode problem but a 01 bag prototype.
// It's for understanding only.

export function zeroOneBag(): number {
  const values = [15, 20, 30]
  const weight = [1, 3, 4]
  const dp = values.map(() => 0)
  // the bag's capacity
  const bagWeight = 4
  // the default value could be 0 (zero) if all objects' weight are
  // positive. but dp[0] must zero. because a bag of zero capacity can contain
  // nothing. if the "weight" of object is negtive, the initial value should
  // be negtive infinite instead, in order to not influence Math.max's
  // return value.
  dp[0] = 0
  for (let i = 0; i <= bagWeight; i++) {
    dp[i] = weight[0] <= i ? values[0] : -Infinity
  }

  for (let i = 1; i < values.length; i++) {
    // for (let j = bagWeight; j >= weight[i]; j--) {
    for (let j = bagWeight; j >= 0; j--) {
      const maxValueWithoutIObject = dp[j - weight[i]] ?? -Infinity
      if (j >= weight[i]) {
        dp[j] = Math.max(dp[j] ?? -Infinity, maxValueWithoutIObject + values[i])
      } else {
        // 进入这个分支的话，说明背包容量 j 比 i 物品的重量小，所以 i 物品是无法放入背包的。
        // 也就不存在上文 Math.max 的 dp[j - weight[i]] + values[i] 条件了。
        dp[j] = dp[j] ?? -Infinity
      }
    }
  }
  console.log('dp ============>', dp)
  return dp[bagWeight]
}
