/*
 * @lc app=leetcode.cn id=166 lang=typescript
 *
 * [166] 分数到小数
 */

/**
 * 整数除法的结果，有三种情况：
 * - 整数
 * - 有限位小数
 * - 无限位循环小数
 * 
 * 分别处理整数和小数部分。
 * 对于小数部分，首先将余数乘以10，然后除以被除数。得到新的余数，重复乘以10除以被除数的步骤。
 * 每次乘以10后，将乘以10后的余数和index记录在map中。若下一次乘以10的余数在map中出现，
 * 说明小数部分出现了循环。
 * 注意点：负号的处理。需要先判断结果的正负，然后算出绝对值结果，组合后返回。
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
