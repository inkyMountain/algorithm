// 示例 1 ：

// 输入：num = "1432219", k = 3
// 输出："1219"
// 解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
// 示例 2 ：

// 输入：num = "10200", k = 1
// 输出："200"
// 解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 示例 3 ：

// 输入：num = "10", k = 2
// 输出："0"
// 解释：从原数字移除所有的数字，剩余为空就是 0 。

/*
 * @lc app=leetcode.cn id=402 lang=typescript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * num 正整数
 * k 正整数
 */
function removeKdigits(num: string, k: number): string {
  if (num.length <= k) {
    return '0'
  }
  const numLength = num.length
  const tokens = num.split('')
  const substringLength = numLength - k
  let substring = tokens.slice(0, substringLength)
  const temp = []
  // 0123 45   i 为4，j为0, k为0
  // 后续的每一个新数字
  for (let i = substring.length; i < numLength; i++) {
    const token = tokens[i]
    const min = [...substring]
    // 要替换substring中的第j个数字
    for (let j = 0; j < substring.length; j++) {
      // 生成替换后的数字
      for (let k = 0; k < substring.length; k++) {
        if (k === j) {
          temp[k] = token
        } else {
          temp[k] = substring[k]
        }
      }
      temp.splice(j, 1)
      temp.push(token)
      if (isSmaller(temp, min)) {
        copy(min, temp)
      }
    }
    if (isSmaller(min, substring)) {
      copy(substring, min)
    }
  }
  return parseInt(substring.join('')).toString()
}

function isSmaller(nums1: string[], nums2: string[]) {
  // for (let i = 0; i < nums1.length; i++) {
  //   if (nums2[i].charCodeAt(0) > nums1[i].charCodeAt(0)) {
  //     return true
  //   }
  // }
  // return false
  return parseInt(nums1.join('')) < parseInt(nums2.join(''))
}

function copy(nums1: string[], nums2: string[]) {
  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nums2[i]
  }
}
// @lc code=end

test('remove-k-digits', () => {
  expect(removeKdigits('1432219', 3)).toStrictEqual('1219')
  expect(removeKdigits('13221', 1)).toStrictEqual('1221')
  expect(removeKdigits('10200', 1)).toStrictEqual('200')
  expect(removeKdigits('100', 1)).toStrictEqual('0')
})
