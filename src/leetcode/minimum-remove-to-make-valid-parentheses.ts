/*
 * @lc app=leetcode.cn id=1249 lang=typescript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
  const stack = []
  const removeIndicesSet = new Set<number>()
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === '(') {
      stack.push(i)
    } else if (char === ')') {
      if (stack.length > 0) {
        stack.pop()
      } else {
        removeIndicesSet.add(i)
      }
    }
  }

  let result = ''

  for (let i = 0; i < stack.length; i++) {
    removeIndicesSet.add(stack[i])
  }
  for (let i = 0; i < s.length; i++) {
    if (!removeIndicesSet.has(i)) {
      result += s[i]
    }
  }
  return result
}
// @lc code=end

/**
 * 始终在栈中的左括号
 * 未匹配的右括号
 */

test('minimum-remove-to-make-valid-parentheses', () => {
  expect(minRemoveToMakeValid('((')).toStrictEqual('')
  expect(minRemoveToMakeValid('))')).toStrictEqual('')
  expect(minRemoveToMakeValid('a(b)c)')).toStrictEqual('a(b)c')
})
