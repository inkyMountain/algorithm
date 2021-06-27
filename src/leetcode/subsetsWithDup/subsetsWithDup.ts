// https://leetcode-cn.com/problems/subsets-ii/

export function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result = [];
  const fragments = [];
  const recurse = (startIndex: number) => {
    result.push([...fragments]);
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      fragments.push(nums[i]);
      recurse(i + 1);
      fragments.pop();
    }
  };

  recurse(0);
  return result;
}
