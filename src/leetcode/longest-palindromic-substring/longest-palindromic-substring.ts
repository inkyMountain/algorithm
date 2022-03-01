/**
 * Problem:
 * 求一个字符串中最长回文子串，返回该子串。
 * 
 * Solution:
 * 遍历字符串，以当前的字符为中心，向两端扩散。
 * 扩散途中，如果两个字符一样，说明仍是回文串。直到两端的字符不同为止。
 * 
 * e.g. 'aba'，首先以第一个a为中心扩展，然后以ab为中心扩展，逐步更新最长回文。
 */
export function longestPalindrome(s: string): string {
  if (s.length <= 1) {
    return s
  }

  const length = s.length
  let longest = {
    length: 1,
    string: s[0],
  }
  for (let i = 0; i < length; i++) {
    let left = i - 1,
      right = i + 1
    let maxLength = 1
    while (left >= 0 && right < length) {
      if (s[left] === s[right]) {
        maxLength = maxLength + 2
        if (maxLength > longest.length) {
          longest.length = maxLength
          longest.string = s.substring(left, right + 1)
        }
      } else {
        break
      }
      left--
      right++
    }

    maxLength = 0
    ;(left = i), (right = i + 1)
    // double chars
    while (left >= 0 && right < length) {
      if (s[left] === s[right]) {
        maxLength = maxLength + 2
        if (maxLength > longest.length) {
          longest.length = maxLength
          longest.string = s.substring(left, right + 1)
        }
      } else {
        break
      }
      left--
      right++
    }
  }
  return longest.string
}
