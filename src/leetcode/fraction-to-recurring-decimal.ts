/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 */

// @lc code=start
function normalizeResult(absolute: string, isPositive: boolean) {
  const withMinus = isPositive ? absolute : '-' + absolute
  return withMinus === '-0' ? '0' : withMinus
}

function fractionToDecimal(numerator: number, denominator: number): string {
  const isPositive = numerator * denominator >= 0
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  const integerPart = Math.floor(numerator / denominator).toString()
  let decimalPart = [],
    remainder = (numerator % denominator) * 10,
    index = 0
  const remainderMap: Record<number, number> = {}
  while (!(remainder in remainderMap)) {
    if (remainder === 0) {
      const absolute = `${integerPart}${
        decimalPart.length > 0 ? '.' + decimalPart.join('') : ''
      }`
      return normalizeResult(absolute, isPositive)
    }
    decimalPart.push(Math.floor(remainder / denominator))
    remainderMap[remainder] = index
    remainder = remainder % denominator
    remainder *= 10
    index++
  }

  decimalPart.splice(remainderMap[remainder], 0, '(')
  decimalPart.push(')')
  return normalizeResult(`${integerPart}.${decimalPart.join('')}`, isPositive)
}
// @lc code=end

test('fraction-to-recurring-decimal', () => {
  expect(fractionToDecimal(1, 2)).toStrictEqual('0.5')
  expect(fractionToDecimal(1, 3)).toStrictEqual('0.(3)')
  expect(fractionToDecimal(4, 333)).toStrictEqual('0.(012)')
  expect(fractionToDecimal(2, 1)).toStrictEqual('2')
  expect(fractionToDecimal(-50, 8)).toStrictEqual('-6.25')
})
