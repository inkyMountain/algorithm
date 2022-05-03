/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
function validPalindrome(s: string): boolean {
  /**
   * 1. 找出第一个不是回文字符串的下标
   * 2. 略过左边的下标，验证是否为回文。
   * 3. 略过右边的下标，验证是否为回文。
   */
  let left = 0,
    right = s.length - 1
  while (left < right && s[left] === s[right]) {
    left++, right--
  }
  if (left > right) {
    return true
  }

  const skipIndexes = [left, right]
  for (const skipIndex of skipIndexes) {
    let isPalindrome = true,
      left = skipIndex === 0 ? 1 : 0,
      right = skipIndex === s.length - 1 ? s.length - 2 : s.length - 1

    while (left <= right) {
      if (s[left] !== s[right]) {
        isPalindrome = false
      }
      left++
      right--
      if (left === skipIndex) {
        left++
      }
      if (right === skipIndex) {
        right--
      }
    }

    if (isPalindrome) {
      return true
    }
  }

  return false
}
// @lc code=end

console.log(
  validPalindrome('aaa'),
  validPalindrome('aba'),
  validPalindrome('abca'),
  validPalindrome('abcdda'),
  validPalindrome('abcdddasdasdasa')
)
