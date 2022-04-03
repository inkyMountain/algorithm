/*
 * @lc app=leetcode.cn id=1190 lang=typescript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
function reverseParentheses(s: string): string {
  const stack: number[] = []
  const pairs: Record<number, number> = {}
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else if (s[i] === ')') {
      const j = stack.pop()
      pairs[i] = j
      pairs[j] = i
    }
  }

  let step = 1,
    index = 0
  const chars: string[] = []
  while (index !== s.length) {
    if (s[index] === '(' || s[index] === ')') {
      index = pairs[index]
      step = -step
    } else {
      chars.push(s[index])
    }
    index += step
  }
  return chars.join('')
  // a(bca(adsa))
}

// time: O(n^2) space: O(n)
// function reverseParentheses(s: string): string {
//   const chars = s.split('')
//   const stack: number[] = []
//   for (let i = 0; i < chars.length; i++) {
//     if (chars[i] === '(') {
//       stack.push(i)
//     } else if (chars[i] === ')') {
//       reverse(chars, stack.pop(), i)
//     }
//   }
//   return chars.reduce((cumulate, char) => {
//     if (char !== '(' && char !== ')') {
//       return `${cumulate}${char}`
//     } else {
//       return cumulate
//     }
//   }, '')
// }

// function reverse(chars: string[], left: number, right: number) {
//   while (left < right) {
//     ;[chars[right], chars[left]] = [chars[left], chars[right]]
//     left++, right--
//   }
// }
// @lc code=end
describe('reverse-substrings-between-each-pair-of-parentheses', () => {
  test('1', () => {
    expect(reverseParentheses('(abcd)')).toStrictEqual('dcba')
  })
})
