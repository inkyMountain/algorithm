// https://leetcode-cn.com/problems/top-k-frequent-elements/

/**
 * 1. 使用排序，时间复杂度 nlogn
 * 2. 使用优化的快速排序，最优情况下时间复杂度为 O(n)，最坏情况下时间复杂度为 O(n^2)。
 * 3. 使用最小堆，保存前 k 大的数字，时间复杂度为 O(nlogk)。
 */

export function topKFrequent(nums: number[], k: number): number[] {
  const frequencyCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequencyCount[nums[i]]) {
      frequencyCount[nums[i]]++;
    } else {
      frequencyCount[nums[i]] = 1;
    }
  }
  return Object.entries<number>(frequencyCount)
    .sort(([, frequency1], [, frequency2]) => frequency2 - frequency1)
    .map(([num]) => +num)
    .slice(0, k);
}
