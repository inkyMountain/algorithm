/*
 * @lc app=leetcode.cn id=306 lang=typescript
 *
 * [306] 累加数
 */

// @lc code=start
function isAdditiveNumber(num: string): boolean {
  const length = Math.ceil(num.length)
  /**
   * for length 第一位数字
   *  for length 第二位数字
   * 遍历整个数字，验证这次循环中的1、2位数构成的累加数，是否和num变量相同。
   */
  let result = false
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      let firstStart = 0,
        firstEnd = i - 1,
        secondStart = i,
        secondEnd = i + j - 1
      outer: while (true) {
        const firstString = num.substring(firstStart, firstEnd + 1)
        const secondString = num.substring(secondStart, secondEnd + 1)
        if (
          (firstString.length > 1 && firstString[0] === '0') ||
          (secondString.length > 1 && secondString[0] === '0')
        ) {
          break outer
        }
        const first = parseInt(firstString)
        const second = parseInt(secondString)
        const sum = first + second
        const sumString = sum.toString()
        inter: for (let k = 0; k < sumString.length; k++) {
          if (num[k + secondEnd + 1] === undefined) {
            break outer
          } else if (num[k + secondEnd + 1] !== sumString[k]) {
            break outer
          }
        }
        const temp = firstEnd
        firstStart = secondStart
        firstEnd = secondEnd
        secondStart = secondEnd + 1
        secondEnd = secondEnd + sumString.length
        if (secondEnd === num.length - 1) {
          result = true
          break
        }
      }
    }
  }
  return result
}
// @lc code=end

test('additive-number', () => {
  expect(isAdditiveNumber('123')).toBeTruthy()
  expect(isAdditiveNumber('12315')).toBeTruthy()
  expect(isAdditiveNumber('112358')).toBeTruthy()
  expect(isAdditiveNumber('199100199')).toBeTruthy()
  expect(isAdditiveNumber('1023')).toBeFalsy()
  expect(isAdditiveNumber('101')).toBeTruthy()
})
