// https://leetcode-cn.com/problems/top-k-frequent-elements/

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
