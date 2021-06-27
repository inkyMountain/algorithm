// https://leetcode-cn.com/problems/increasing-subsequences/

export function findSubsequences(nums: number[]): number[][] {
  const result = [];
  const fragments = [];
  const recurse = (startIndex: number) => {
    if (fragments.length >= 2) {
      result.push([...fragments]);
    }
    const used = {};
    for (let i = startIndex; i < nums.length; i++) {
      if (fragments[fragments.length - 1] > nums[i] || used[nums[i]]) {
        continue;
      }
      fragments.push(nums[i]);
      used[nums[i]] = true;
      recurse(i + 1);
      fragments.pop();
    }
  };

  recurse(0);
  return result;
}
