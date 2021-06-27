// https://leetcode-cn.com/problems/combination-sum-ii/

export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const result = [];
  let nums = [];
  // we should sort the candidates from smaller to bigger since we need
  // judge if a recursion has a point.
  candidates = candidates.sort((a, b) => a - b);
  const recurse = (startIndex: number, sum: number) => {
    if (sum === target) {
      result.push([...nums]);
      return;
    }
    for (
      let i = startIndex;
      i < candidates.length && sum + candidates[i] <= target;
      i++
    ) {
      // if i is not the first number of this loop, and equals previous
      // number, then it should be skipped to avoid repeatition.
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }
      nums.push(candidates[i]);
      sum += candidates[i];
      recurse(i + 1, sum);
      nums.pop();
      sum -= candidates[i];
    }
  };
  recurse(0, 0);
  return result;
}
