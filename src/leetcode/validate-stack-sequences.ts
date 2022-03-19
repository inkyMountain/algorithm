/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  const stack = []
  let poppedIndex = 0
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    while (
      stack.length > 0 &&
      stack[stack.length - 1] === popped[poppedIndex]
    ) {
      stack.pop()
      poppedIndex++
    }
  }
  return poppedIndex === popped.length
}
// @lc code=end

test('validate-stack-sequences', () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])).toBeTruthy()
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toBeTruthy()
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toBeFalsy()
})
