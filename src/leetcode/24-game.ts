/*
 * @lc app=leetcode.cn id=679 lang=typescript
 *
 * [679] 24 点游戏
 */

// @lc code=start
function judgePoint24(cards: number[]): boolean {
  let result = false
  let currentNums = [...cards]
  const operators = ['+', '-', '*', '/']
  const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  }

  function backtrace() {
    // the end of backtrace
    if (currentNums.length === 1) {
      if (Math.abs(currentNums[0] - 24) < 0.01) {
        result = true
      }
      return
    }
    for (let i = 0; i < currentNums.length; i++) {
      for (let j = 0; j < currentNums.length; j++) {
        if (i === j) {
          continue
        }
        for (const operator of operators) {
          const isILeft = i < j
          let iValue, jValue
          if (isILeft) {
            iValue = currentNums.splice(i, 1)[0]
            jValue = currentNums.splice(j - 1, 1)[0]
          } else {
            jValue = currentNums.splice(j, 1)[0]
            iValue = currentNums.splice(i - 1, 1)[0]
          }
          const operationResult = operations[operator](iValue, jValue)
          currentNums.push(operationResult)
          backtrace()
          currentNums.pop()
          if (isILeft) {
            currentNums.splice(i, 0, iValue)
            currentNums.splice(j, 0, jValue)
          } else {
            currentNums.splice(j, 0, jValue)
            currentNums.splice(i, 0, iValue)
          }
        }
      }
    }
  }
  backtrace()

  return result
}
// @lc code=end

describe('24-game', () => {
  test('1', () => {
    expect(judgePoint24([3, 8, 1, 1])).toStrictEqual(true)
  })
})
