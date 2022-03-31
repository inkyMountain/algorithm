/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第 N 位数字
 */

/**
 * 首先确定 n 对应的数字有几位数，比如 n 在 [1000, 9999] 的范围里，也就是4位数。
 * 然后将 n 减去 [1, 999] 范围内一共有几位数，除以 4，得知 n 对应了 [1000, 9999] 中的哪个数字。
 * 然后 n % 4 得知是这个数字中的第几位，也就是答案。
 * 2147483647
 *
 * 1位 9 1 - 9
 * 2位 90*2 89 10 - 99
 * 3位 900*3 899 100 - 999
 * 4位 9000*4 8999 1000 - 9999
 * 5位 90000*5 89999 10000 - 99999
 * 6位 900000*6 899999 100000 - 999999
 * 7位 9000000*7 8999999 1000000 - 9999999
 * 8位 90000000*8 89999999 10000000 - 99999999
 * 9位 900000000*9 899999999 100000000 - 999999999
 */
// @lc code=start
function findNthDigit(n: number): number {
  const numberAmount = [
    9,
    90 * 2,
    900 * 3,
    9000 * 4,
    90000 * 5,
    900000 * 6,
    9000000 * 7,
    90000000 * 8,
    900000000 * 9,
  ]

  let sum = 0,
    numberLength: number
  for (let i = 0; i < numberAmount.length; i++) {
    if (sum + numberAmount[i] >= n) {
      numberLength = i + 1
      break
    }
    sum += numberAmount[i]
  }
  n -= numberLength === 1 ? sum : sum + 1
  const start = numberLength === 1 ? 0 : Math.pow(10, numberLength - 1)
  const numberPastStart = Math.floor(n / numberLength)
  const index = n % numberLength
  return +(start + numberPastStart).toString()[index]
}
// @lc code=end

describe('nth-digit', () => {
  test('1', () => {
    expect(findNthDigit(1)).toStrictEqual(1)
    expect(findNthDigit(1000)).toStrictEqual(3)
    expect(findNthDigit(11)).toStrictEqual(0)
  })
})
