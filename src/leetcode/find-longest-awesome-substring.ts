/*
 * @lc app=leetcode.cn id=1542 lang=typescript
 *
 * [1542] 找出最长的超赞子字符串
 */

// @lc code=start
/**
 * 关键字：状态压缩、前缀和
 * s 中只包含 0-9 数字，这给状态压缩创造了条件。
 * 超赞字符串意味着字符串中，所有数字的出现次数中，
 * 最多有一个数字的出现次数是奇数，其他数字的出现次数必须是偶数。
 * 可以使用二进制长度为10的数字来表示每个数字出现次数的奇偶性，
 * 为0代表出现了偶数次，为1代表出现了奇数次。
 * 在遍历字符串s时，将每个数字的出现次数的统计数字，放入哈希对象中，value是范围的右边界。
 * 对于范围 [0, j] 的出现次数数字，如果将其中的一位翻转，在哈希对象中查找，
 * 并且查找成功(设下标为i)，说明[i + 1, j]是一个超赞字符串。
 * 因为[0, i]和[0, j]两个范围，它们的奇偶都是一样的，只有一位不一样。
 * 都是奇数或者都是偶数，它们的差就是偶数。一个为奇数一个为偶数，它们的差就是奇数。
 * 所以此时[i + 1, j]必定是超赞字符串。
 * 另外需要注意的是，[0, j]对应的数字，不翻转的情况下也要查询一次哈希对象。
 * 如果存在匹配值，说明这个值和该数字的所有位数，奇偶性都一样。
 * 那么它们的差就全是偶数，这同样符合超赞字符串的定义。
 */
function longestAwesome(s: string): number {
  const prefix: Record<number, number> = {0: -1}
  const length = s.length
  let status = 0,
    max = 0
  for (let i = 0; i < length; i++) {
    const num = parseInt(s[i])
    // num 为当前遍历中的数字，改变对应的status位数的奇偶性。
    status = status ^ (1 << num)

    for (let bitLocation = 0; bitLocation < 10; bitLocation++) {
      const bit = 1 << bitLocation
      // 将其中的一位的奇偶性进行翻转，然后去匹配。
      const matchAfterFlipped = prefix[status ^ bit]
      // 如果匹配中了，就可能是结果之一，去更新max变量。
      if (matchAfterFlipped !== undefined) {
        max = Math.max(max, i - matchAfterFlipped)
      }
    }

    const match = prefix[status]
    if (match === undefined) {
      prefix[status] = i
    } else {
      max = Math.max(max, i - match)
    }
  }

  return max
}
// @lc code=end

// should be 5 and 3
console.log(longestAwesome('3242415'), longestAwesome('350844'))
