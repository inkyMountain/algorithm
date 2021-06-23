// https://leetcode-cn.com/problems/combination-sum/

export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  let nums = [];
  let result = [];
  let sum = 0;

  function helper(startIndex: number) {
    if (sum === target) {
      result.push([...nums]);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      nums.push(candidates[i]);
      sum += candidates[i];
      helper(i);
      sum -= candidates[i];
      nums.pop();
    }
  }

  helper(0);
  return result;
}
