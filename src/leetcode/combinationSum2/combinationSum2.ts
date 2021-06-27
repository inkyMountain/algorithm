// https://leetcode-cn.com/problems/combination-sum-ii/

export function combinationSum2(candidates: number[], target: number): number[][] {
  const result = []
  let nums = []
  const used = new Array(candidates.length).fill(false)
  // we should sort the candidates from smaller to bigger since we need
  // judge if a recursion has a point.
  candidates = candidates.sort((a, b) => a - b)
  const recurse = ( startIndex: number, sum: number) => {
    if (sum === target) {
      result.push([...nums])
      return
    }
    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
      /**
       * i > 0: only when i > 0 there exists a previous candidate
       * candidates[i] === candidates[i - 1] && used[i - 1] === false:
       *  if previous boolean value in used array is false, indicates
       *  that current candidate has no need to repeat this recurse. Because
       *  there's a same value in the same layer has recursed.
       *  If we continue recusing, it'll output a repeated combination which
       *  breaks the problem's rule.
       */
      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
        continue
      }
      nums.push(candidates[i])
      used[i] = true
      sum += candidates[i]
      recurse(i + 1, sum)
      used[i] = false
      nums.pop()
      sum -= candidates[i]
    }
  }
  recurse(0, 0)
  return result
};


