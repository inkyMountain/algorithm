// https://leetcode-cn.com/problems/subarray-sum-equals-k/

export function subarraySum(nums: number[], k: number): number {
  const map = {0: 1}
  let sum = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map[sum - k] > 0) {
      count += map[sum - k]
    }
    map[sum] = map[sum] || 0
    map[sum]++
  }
  return count
}
