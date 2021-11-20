// https://leetcode-cn.com/problems/generate-parentheses/
export function generateParenthesis(n: number): string[] {
  let left = n,
    right = n
  let combination = ''
  const leftParenthesis = '('
  const rightParenthesis = ')'
  const result = []

  function backtrace() {
    if (left === 0 && right === 0) {
      result.push(combination)
      return
    }
    if (left > 0) {
      left--
      combination += leftParenthesis
      backtrace()
      combination = combination.slice(0, -1)
      left++
    }
    if (right > left) {
      right--
      combination += rightParenthesis
      backtrace()
      combination = combination.slice(0, -1)
      right++
    }
  }

  backtrace()
  return result
}
