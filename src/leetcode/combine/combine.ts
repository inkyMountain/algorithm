// https://leetcode-cn.com/problems/combinations/

export function combine(n: number, k: number): number[][] {
  let combinations = [];
  let nums = [];
  const traverse = (n: number, k: number, startIndex: number) => {
    if (nums.length === k) {
      combinations.push([...nums]);
      return
    }
    for (let i = startIndex; i < n; i++) {
      nums.push(i + 1);
      traverse(n, k, i + 1);
      nums.pop();
    }
  };
  traverse(n, k, 0);
  return combinations;
}
