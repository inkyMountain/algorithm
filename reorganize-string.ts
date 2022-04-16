/*
 * @lc app=leetcode.cn id=767 lang=typescript
 *
 * [767] 重构字符串
 */

/**
 * 首先统计所有字母的出现次数，统计的过程中记录下出现次数最多的那个字母及其出现的次数。
 * 设字符串长度为 N，如果 N 为奇数，那么出现次数最多的字母，不得超过 (N + 1) / 2 次，
 * 否则无法做到相同的字母不相邻。
 * 此时就具备了一个条件，就是所有字母的出现次数小于等于 (N +1) / 2，且最多只有一个数字能等于这个次数。
 * 那么只要首先把出现次数最多的字母，从索引 0 开始，全部放在偶数索引上。
 * 然后剩余的数字，都隔一位放一个，无论索引是奇数还是偶数。
 * 正确性证明：首先只有出现次数最多的那个数字有相邻的可能性。
 * 因为所有的数字都是隔一位放置的，只有偶数索引放不下这个出现次数最多的数字，然后继续放在奇数索引上，才有可能相邻。
 * 但是该数字的出现次数已经小于等于 (N + 1) / 2 了，偶数位不可能不够放。
 */
// @lc code=start
/**
 * a a a b b c
 * s.length = 6
 * a 3
 * b 2
 * c 1
 */
function reorganizeString(s: string): string {
  const count: Record<string, number> = {}
  let maxLetter: string,
    max = -Infinity
  // 统计每个字母出现的次数，同时记录出现次数最多的那个字母。
  for (let i = 0; i < s.length; i++) {
    const letter = s[i]
    count[letter] = count[letter] || 0
    count[letter]++
    // 记录出现次数最多的那个字母
    if (count[letter] > max) {
      maxLetter = letter
    }
    max = Math.max(max, count[letter])
  }

  const maxAppearTimes = (s.length + 1) >> 1
  if (max > maxAppearTimes) {
    return ''
  }

  const result = new Array(s.length).fill(0)
  let index = 0

  while (count[maxLetter] > 0) {
    result[index] = maxLetter
    count[maxLetter]--
    index += 2
  }

  for (let i = 0; i < 26; i++) {
    const letter = toLetter(i)
    if (letter === maxLetter) {
      continue
    }
    while (count[letter] > 0) {
      if (index >= s.length) {
        index = 1
      }
      result[index] = letter
      count[letter]--
      index += 2
    }
  }

  return result.join('')
}

// num 0-25 => 'a'-'z'
function toLetter(num: number) {
  const code = num + 'a'.charCodeAt(0)
  return String.fromCharCode(code)
}
// @lc code=end

console.log(reorganizeString('aaabbcc'))
