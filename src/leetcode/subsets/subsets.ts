// https://leetcode-cn.com/problems/subsets/

export function subsets(nums: number[]): number[][] {
  const result = [];
  const fragments = [];
  const recurse = (startIndex: number) => {
    result.push([...fragments]);
    for (let i = startIndex; i < nums.length; i++) {
      fragments.push(nums[i]);
      recurse(i + 1);
      fragments.pop();
    }
  };

  recurse(0);
  return result;
}
