/**
 * https://leetcode-cn.com/problems/subarray-sums-divisible-by-k/
 * 首先求出数组的前缀和。然后需要知道同余定理，也就是 (P(j) - P(i - 1)) % k === 0，
 * 等同于 P(j) % k === P(i - 1) % k
 */
 export function subarraysDivByK(nums: number[], k: number): number {
  const prefixSum = [];
  let sum = 0;
  const length = nums.length;
  // 使用前缀和来求元素和时，暗含了 P(-1) 为 0 的条件。
  // 所以使用同余定理时，需要手动补上这个条件。
  const remainderMap: Record<number, number> = { 0: 1 };
  for (let i = 0; i < length; i++) {
    sum += nums[i];
    prefixSum[i] = sum;
  }

  let amount = 0;
  for (let i = 0; i < length; i++) {
    const num = prefixSum[i];
    // 注意，负数取模需要 + k 校正为整数
    const remainder = num % k >= 0 ? num % k : num % k + k;
    remainderMap[remainder] = remainderMap[remainder] ?? 0;
    // 将当前数字前面的，余数相同的前缀，加入到总数中。
    amount += remainderMap[remainder];
    remainderMap[remainder]++;
  }

  return amount;
}
