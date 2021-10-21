// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
export function lengthOfLongestSubstring(s: string): number {
  if (s === '') {
    return 0
  }
  let left = 0,
    right = 0
  const map = new Map()
  let max = 1
  map.set(s[0], 1)
  while (true) {
    right += 1
    if (right === s.length) {
      break
    }
    const original = map.get(s[right]) ?? 0
    if (original === 0) {
      map.set(s[right], 1)
      max = Math.max(max, map.size)
      continue
    } else {
      map.set(s[right], map.get(s[right]) + 1)
      while (map.get(s[right]) > 1) {
        map.set(s[left], map.get(s[left]) - 1)
        if (map.get(s[left]) === 0) {
          map.delete(s[left])
        }
        left++
      }
    }
  }

  return max
}
