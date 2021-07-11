// https://leetcode-cn.com/problems/assign-cookies/

export function findContentChildren(g: number[], s: number[]): number {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let cookieIndex = s.length - 1
  let childIndex = g.length - 1
  let result = 0
  while (childIndex >= 0 && cookieIndex >= 0) {
    if (g[childIndex] <= s[cookieIndex]) {
      childIndex--
      cookieIndex--
      result++
    } else {
      childIndex--
    }
  }
  return result
}
