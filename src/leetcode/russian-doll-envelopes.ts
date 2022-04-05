/*
 * @lc app=leetcode.cn id=354 lang=typescript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
function maxEnvelopes(envelopes: number[][]): number {
  /**
   * 方法一(超时)：
   * 最长上升子序列的变式，将数字的大小比较方法重写即可。
   * 使用 dp[i] 记录以 i 结尾的最长上升子序列长度，遍历时比较 [0, i - 1] 范围
   * 内的数字和 envelopes[i] 的大小，来更新 dp[i]。
   * 当遍历完成后，答案就是 dp 数组中最大的那个。
   *
   * 方法二(基于贪心思想)：
   * 维护一个 d 数组，当遍历 envelopes 时，如果当前信封大于 d 数组的最后一个信封，
   * 则当前信封可以组成一个更长的上升子序列。所以将当前信封 push 进 d 数组。
   * 如果小于等于当前信封，说明它可以替换之前的一个子序列，令其成为一个上升速度更慢的子序列。
   * 有结论 d 数组是一个单调递增的数组，例子：
   * d: [1, 2, 4, 3]
   *           j  i
   * d[j] > d[i], 如果删除 i 对应的子序列的最后一位，就得到了长度为 3 的子序列，
   * 子序列的最后一位小于 3。又有 d[j] > d[i]，所以 dp[j] > 3。
   * 由已知得 dp[j] 应小于 3，所以得证。
   *
   * 以上是关于一维的最长上升子序列，但是此处是二维。二维麻烦的地方在于，比较 a b 两者的大小时，
   * 可能出现 a 的宽大于 b 的宽，但是 a 的高却小于 b 的高的情况。
   * 为此，只需要对宽进行升序排列，当宽相同时，以高的为第二指标进行降序排列。
   * 这是因为后续在 d 数组中仅以高进行大小比较，有可能出现宽相同的情况。
   * 仅以高进行比较，会出现等宽信封嵌套的情况。所以排序时需要以高位第二指标进行降序，
   * 这样等宽的信封，就不会出现高短的信封在前面，避免等宽信封嵌套的误判情况出现。
   */

  const sorted = envelopes.sort((a, b) => {
    return isGreaterThan(a, b)
  })

  const d: number[] = [sorted[0][1]]
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][1] > d[d.length - 1]) {
      d.push(sorted[i][1])
    } else {
      // binary search and modify
      let left = 0,
        right = d.length - 1,
        index = d.length - 1
      const target = sorted[i][1]
      while (left <= right) {
        const mid = (left + right) >> 1
        // 注意这里的等号，因为目标是寻找 >= target 的第一位数字。
        if (d[mid] >= target) {
          index = mid
          right = mid - 1
        } else {
          left = mid + 1
        }
      }
      if (index >= 0 && index < d.length) {
        d[index] = target
      }
    }
  }
  return d.length
}

function isGreaterThan(a: number[], b: number[]) {
  if (a[0] - b[0] === 0) {
    // 当宽相等时，对高进行降序。
    return b[1] - a[1]
  } else {
    return a[0] - b[0]
  }
}
// @lc code=end
describe('russian-doll-envelopes', () => {
  test('1', () => {
    expect(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ])
    ).toStrictEqual(3)
    expect(
      maxEnvelopes([
        [2, 100],
        [3, 200],
        [4, 300],
        [5, 500],
        [5, 400],
        [5, 250],
        [6, 370],
        [6, 360],
        [7, 380],
      ])
    ).toStrictEqual(5)

    expect(
      maxEnvelopes([
        [30, 50],
        [12, 2],
        [3, 4],
        [12, 15],
      ])
    ).toStrictEqual(3)

    expect(
      maxEnvelopes([
        [15, 8],
        [2, 20],
        [2, 14],
        [4, 17],
        [8, 19],
        [8, 9],
        [5, 7],
        [11, 19],
        [8, 11],
        [13, 11],
        [2, 13],
        [11, 19],
        [8, 11],
        [13, 11],
        [2, 13],
        [11, 19],
        [16, 1],
        [18, 13],
        [14, 17],
        [18, 19],
      ])
    ).toStrictEqual(5)
  })
})
