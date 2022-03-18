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
  const stack = []

  let deleted = 0
  for (let i = 0; i < num.length; i++) {
    const digit = num[i]
    while (
      stack.length > 0 &&
      isSmaller(digit, stack[stack.length - 1]) &&
      deleted < k
    ) {
      stack.pop()
      deleted++
    }
    stack.push(digit)
  }
  let result = ''
  for (let i = 0; i < num.length - k; i++) {
    result += stack[i]
  }
  return result.replace(/^0+/g, '') || '0'
}

function isSmaller(a: string, b: string) {
  return a.charCodeAt(0) < b.charCodeAt(0)
}

// @lc code=end

test('remove-k-digits', () => {
  expect(removeKdigits('13221', 1)).toStrictEqual('1221')
  expect(removeKdigits('10200', 1)).toStrictEqual('200')
  expect(removeKdigits('100', 1)).toStrictEqual('0')
  expect(removeKdigits('001', 0)).toStrictEqual('1')
  expect(removeKdigits('1432219', 3)).toStrictEqual('1219')
  expect(removeKdigits('112', 1)).toStrictEqual('11')
  expect(removeKdigits('123454321', 7)).toStrictEqual('11')
})
