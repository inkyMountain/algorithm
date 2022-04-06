/**
 * 剑指offer 46
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * 动态规划
 */
function translateNum(num: number): number {
  const numString = num.toString()
  const numLength = numString.length
  const numberToLetterMap = createNumberToLetterMap()
  const dp = new Array(numLength).fill(1)
  dp[0] = 1
  if (numLength === 1) {
    return 1
  }
  dp[1] = numString.slice(0, 2) in numberToLetterMap ? 2 : 1
  for (let i = 2; i < numLength; i++) {
    // xxixxx
    dp[i] =
      numString.slice(i - 1, i + 1) in numberToLetterMap
        ? dp[i - 2] + dp[i - 1]
        : dp[i - 1]
  }
  return dp[dp.length - 1]
}

function createNumberToLetterMap() {
  const numberToLetterMap: Record<number, string> = {}
  const aCharCode = 'a'.charCodeAt(0)
  for (let i = 0; i <= 25; i++) {
    const code = aCharCode + i
    numberToLetterMap[i] = String.fromCharCode(code)
  }
  return numberToLetterMap
}

describe('offer46', () => {
  it('1', () => {
    expect(translateNum(12)).toStrictEqual(2)
  })
  it('2', () => {
    expect(translateNum(129)).toStrictEqual(2)
  })
})
