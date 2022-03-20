/*
 * @lc app=leetcode.cn id=1156 lang=typescript
 *
 * [1156] 单字符重复子串的最大长度
 */

// @lc code=start
function maxRepOpt1(text: string): number {
  /**
   * 遍历字符串，记录每个字符的起点、终点。
   * 遍历每个不重复的字符，如果它们连续范围个数是：
   * 一个：范围长度就是最大长度
   * 两个：结果是它们中的较大值(间距>=1)或者 range1 + range2 - 1(间距等于1)
   * >=三个：结果是它们中的较大值(两两间距都>=1)或者 range1 + range2(某两个间距等于1)
   */
  const charRanges = toCharRanges(text)
  let result = 1

  Object.entries(charRanges).forEach(([char, ranges]) => {
    if (ranges.length === 1) {
      const [start, end] = ranges[0]
      result = Math.max(result, end - start + 1)
    } else {
      let neighborIndex,
        neighborLengthSum,
        longestRangeLength = ranges[0].length,
        longestRangeIndex = 0
      ranges.forEach(([start, end], index) => {
        result = Math.max(result, end - start + 1)
        if (start - ranges[index - 1]?.[1] === 2) {
          const rangeSum =
            end - start + 1 + ranges[index - 1][1] - ranges[index - 1][0] + 1
          if (neighborIndex === undefined) {
            neighborIndex = index
            neighborLengthSum = rangeSum
          } else if (rangeSum > neighborLengthSum) {
            neighborIndex = index
            neighborLengthSum = rangeSum
          }
        }
        if (end - start + 1 > longestRangeLength) {
          longestRangeLength = end - start + 1
          longestRangeIndex = index
        }
      })
      result = Math.max(result, longestRangeLength + 1)
      if (neighborIndex !== undefined) {
        const leftRange = ranges[neighborIndex - 1]
        const rightRange = ranges[neighborIndex]
        result = Math.max(
          result,
          ranges.length === 2
            ? rightRange[1] - leftRange[0]
            : rightRange[1] - leftRange[0] + 1
        )
      }
    }
  })

  return result
}

function toCharRanges(text: string) {
  text += '.'
  const charRanges: Record<string, Array<Array<number>>> = {}
  let continuousChar = text[0]
  let start = 0
  for (let i = 1; i < text.length; i++) {
    const current = text[i]
    const previous = text[i - 1]
    if (current === previous) {
    } else {
      charRanges[previous] = charRanges[previous] || []
      charRanges[previous].push([start, i - 1])
      start = i
    }
  }
  return charRanges
}
// @lc code=end

describe('swap-for-longest-repeated-character-substring', () => {
  test('toCharRanges', () => {
    expect(toCharRanges('aabbcc')).toStrictEqual({
      a: [[0, 1]],
      b: [[2, 3]],
      c: [[4, 5]],
    })
    expect(toCharRanges('aabccc')).toStrictEqual({
      a: [[0, 1]],
      b: [[2, 2]],
      c: [[3, 5]],
    })
    expect(toCharRanges('abc')).toStrictEqual({
      a: [[0, 0]],
      b: [[1, 1]],
      c: [[2, 2]],
    })
    expect(toCharRanges('a')).toStrictEqual({
      a: [[0, 0]],
    })
  })

  test('1', () => {
    expect(maxRepOpt1('aaaaa')).toStrictEqual(5)
    expect(maxRepOpt1('aaaaabbb')).toStrictEqual(5)
    expect(maxRepOpt1('aabbccaa')).toStrictEqual(3)
    expect(maxRepOpt1('aacaa')).toStrictEqual(4)
    expect(maxRepOpt1('aabababa')).toStrictEqual(4)
    expect(maxRepOpt1('aabcabcabba')).toStrictEqual(3)
    expect(maxRepOpt1('aaabbaaa')).toStrictEqual(4)
  })
})
