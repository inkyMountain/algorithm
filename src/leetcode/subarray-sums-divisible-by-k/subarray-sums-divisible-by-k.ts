export function subarraysDivByK(nums: number[], k: number): number {
  const prefixSum = []
  let sum = 0
  const length = nums.length
  const remainderMap: Record<number, number> = {0: 1}
  for (let i = 0; i < length; i++) {
    sum += nums[i]
    prefixSum[i] = sum
  }

  let amount = 0
  // 1, 2, 3   i = 0, j = 1
  for (let i = 0; i < length; i++) {
    const num = prefixSum[i]
    const remainder = num % k >= 0 ? num % k : (num % k) + k
    remainderMap[remainder] = remainderMap[remainder] ?? 0
    amount += remainderMap[remainder]
    remainderMap[remainder]++
  }

  return amount
}
