/*
 * @lc app=leetcode.cn id=955 lang=typescript
 *
 * [955] 删列造序 II
 */

// @lc code=start
/**
 * 逐个字符比较字典序，如果
 * - strs[0] < strs[1] < ... < strs[n - 1]
 *   符合条件，return
 *
 * - strs[0] < strs[1] <= ... < strs[n - 1]
 *   比较过程中出现了相等的情况，那么就要将该列加上下一列的字符一起比较。
 *
 * - strs[i] > strs[i + 1]
 * 该列需要删除，deleteCount + 1
 */

/**
 * 以下面的数组为例子说明算法的流程。
 * [
 *   "bcba",
 *   "acac",
 * ]
 * 首先是需要声明的变量:
 * - count 用于记录整个算法的流程一共删除了几行。
 * - comparingStrings
 *   用于记录当前用于比较的字符串数组。为什么需要这个数组？
 *   在大多数情况下，仅需要比较当前列的字符。但当遇到两个字符串的字符字典序相等的情况，
 *   需要比较后一个字符的字典序，来决定字典序大小。比如下面例子中index为1的字符：c。
 *   由于两个c的字典序是相同的，所以需要比较后一个字符，b和a。再看index为0的字符，b和a。
 *   由于b的字典序小于a，所以第0列应该被删除。那么在比较到index为2的字符时，
 *   应该进行比较的字符是 cb & ca。由于没有很方便的方法，可以截取出 cb 和 ca，
 *   所以需要在比较的过程中，把需要进行比较的字符，存储在一个数组中进行比较。
 *   就像这样：
 *   [
 *    [c, b],
 *    [c, a],
 *   ]
 *
 * 流程：
 * 在整个流程中，设字符的长度为 strLength，需要遍历 strLength 来逐列比较。
 * for col in strLength
 * - col: 0
 * 将 b 和 a 放入 comparingStrings 中。
 * 由于 strs[0][col] < strs[1][col]，是需要删除的列，所以将 count++。
 * 但此时不需要删除 comparingStrings 中的 b 和 a，可以在下一次列比较中直接替换这两个字符，
 * 达到删除的效果。
 *
 * - col 1
 * comparingStrings[0][col - count] = strs[0][col]
 * 也就是
 * comparingStrings[0][1 - 1] = strs[0][1]
 * 此时 count 为 1，col 为 1，所以 comparingStrings 变成了：
 * [
 *  ["c"],
 *  ["c"],
 * ]
 * 原来的字符由于被删除了，所以这里需要进行替换。
 *
 * - col 2
 *
 * comparingStrings[0][col - count] = strs[0][col]
 * 也就是
 * comparingStrings[0][2 - 1] = strs[0][2]
 * [
 *  ["c", "b"],
 *  ["c", "a"],
 * ]
 * 由于 b < a，所以 col 2 应该被删除。
 * count: 1 -> 2
 *
 * - col 3
 * comparingStrings[0][col - count] = strs[0][col]
 * 也就是
 * comparingStrings[0][3 - 2] = strs[0][3]
 * [
 *   ["c", "a"],
 *   ["c", "b"],
 * ]
 */

function minDeletionSize(strs: string[]): number {
  const comparingStrings: string[][] = strs.map((str) => [])
  let deleteCount = 0
  outer: for (let col = 0; col < strs[0].length; col++) {
    // 记录一个列是否为严格的字典序递增 (即没有等于的情况)
    let isStrictIncreasingColumn = true
    comparingStrings[0][col - deleteCount] = strs[0][col]
    inner: for (let i = 1; i < strs.length; i++) {
      comparingStrings[i][col - deleteCount] = strs[i][col]
      // 当前进行比较的字符串是严格地按照字典序递增。
      // 虽然不需要进行任何操作，但是有这个分支可以让逻辑更加清晰。
      if (comparingStrings[i - 1] < comparingStrings[i]) {
      } else {
        isStrictIncreasingColumn = false
        // 这一列出现了不符合字典序的情况，需要删除。后面的字符不需要继续比较了。
        if (comparingStrings[i - 1] > comparingStrings[i]) {
          deleteCount++
          break inner
        }
        // 这一列可能符合要求，继续比较。
        else {
        }
      }
    }
    if (isStrictIncreasingColumn) {
      break outer
    }
  }
  return deleteCount
}
// @lc code=end

describe('delete-columns-to-make-sorted', () => {
  test('1', () => {
    expect(minDeletionSize(['a', 'b', 'c'])).toStrictEqual(0)
    expect(minDeletionSize(['xa', 'xb', 'yc'])).toStrictEqual(0)
    expect(minDeletionSize(['xa', 'xb', 'yz'])).toStrictEqual(0)
    expect(minDeletionSize(['xb', 'xa', 'yz'])).toStrictEqual(1)
    expect(minDeletionSize(['bcba', 'acac'])).toStrictEqual(2)
  })
})
