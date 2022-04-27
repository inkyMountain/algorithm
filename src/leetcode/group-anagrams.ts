/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * time: O(n * k), where k stands for the length of longest string in strs array.
 */
function groupAnagrams(strs: string[]): string[][] {
  const counts = new Array(26).fill(0)
  const anagramArrays: Record<string, Array<string>> = {}
  for (let str of strs) {
    for (let i = 0; i < counts.length; i++) {
      counts[i] = 0
    }
    for (let i = 0; i < str.length; i++) {
      const charCodeOffset = str.charCodeAt(i) - 'a'.charCodeAt(0)
      counts[charCodeOffset]++
    }
    const jointCount = counts.join(' ')
    anagramArrays[jointCount] = anagramArrays[jointCount] || []
    anagramArrays[jointCount].push(str)
  }

  return Object.values(anagramArrays)
}
// @lc code=end

console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']))
