/*
 * @lc app=leetcode.cn id=233 lang=typescript
 *
 * [233] 数字 1 的个数
 */

/**
 * 以 20123 为例，分别统计5个数字所在位置，出现1的次数。
 * 答案是这5个次数的总和。
 * 注意点：虽然统计不同位置的出现次数时，会将同一个数字算进去，
 * 但是出现次数只算当前位置的1，所以不会重复。
 * 比如 11111, 它会在统计左边第一位时出现时，只算了1次，
 * 剩下的四个1会在统计其他位置时被算入。
 *
 * 回到 20123 这个例子，以0 1 2-9为例子解释。
 * 0:
 * 将0所在位置称为第二位(从左往右)，0左侧的数字(也就是2)称为高位，
 * 0右侧的数字(123)称为低位。
 * 当高位是2时，第二位是不可能出现1的，所以2必须要降到0或者1。
 * 假设2降到了1，那么0右边的123的每一位，都可以是0-9，都为第二位出现1的次数做了贡献。
 * [0, 999]，总次数是10^3次。当2降到0的时候，情况同1，所以也是10^3。
 *
 * 1:
 * 高位数字为20时，这时候低位是23, [0, 23]都可以为第三位为1做出一次贡献。
 * 高位数字为[00, 19]时，低位可以是任意组合。低位可以在 [0,99]之间变化，一共20 * 100种情况。
 * 总计：20 * 100 + 24
 *
 * 2 (从右往左第二位的2):
 * 总计:
 * 这种情况和1比较类似，不同的是高位为201的情况，这时候由于当前位是大于1的，
 * 所以低位可以任意组合，而不像当前位为1时那样，受低位的最大值限制。
 * [0, 201] [0, 9]
 * (201 + 1) * 10
 */
// @lc code=start
function countDigitOne(n: number): number {
  // 10086
  let digit = 1
  const length = lengthOf(n)
  let result = 0
  for (let i = 0; i < length; i++) {
    const high = Math.floor(n / (digit * 10))
    const low = n % digit
    const current = Math.floor(n / digit) % 10
    if (current === 0) {
      result += high * digit
    } else if (current === 1) {
      // low 需要 +1，以 211 中间的1为例，右边可以是0和1，总共是2个，但是low是1，所以需要+1。
      result += high * digit + low + 1
    } else {
      result += (high + 1) * digit
    }
    digit *= 10
  }

  return result
}

function lengthOf(num: number) {
  if (num === 0) {
    return 1
  }
  num = Math.abs(num)
  let length = 0
  while (num > 0) {
    num = Math.floor(num / 10)
    length++
  }
  return length
}
// @lc code=end

describe('number-of-digit-one', () => {
  test('length of', () => {
    expect(lengthOf(0)).toStrictEqual(1)
    expect(lengthOf(1)).toStrictEqual(1)
    expect(lengthOf(10)).toStrictEqual(2)
    expect(lengthOf(11)).toStrictEqual(2)
  })
  test('countDigitOne', () => {
    expect(countDigitOne(13)).toStrictEqual(6)
    expect(countDigitOne(1)).toStrictEqual(1)
  })
})
