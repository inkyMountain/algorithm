/**
 * space mn
 * time mn
 */
export function numDistinct(s: string, t: string): number {
  const dp = []
  for (let i = -1; i < s.length; i++) {
    dp[i] = []
    for (let j = -1; j < t.length; j++) {
      if (j === -1) {
        dp[i][j] = 1
      } else {
        dp[i][j] = 0
      }
    }
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      // 如果末尾的字符相等，那么有两种途径得到 dp[i][j]。
      // 第一种是使用 s[i] 和 t[j]匹配，那么总数是 dp[i - 1][j - 1]。
      // 匹配的过程可以理解为“挑选”，s挑选index为i的字符匹配t[j]，
      // 其余的字符在 [0, i - 1]范围内挑选。
      // 或者所有的字符都在 [0, i - 1]范围内挑选。

      // 第一种是不使用 s[i] 和 t[j]匹配，那么总数是 dp[i - 1][j]
      if (s[i] === t[j]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
      } else {
        // 如果s t的最后一个字符不相等，那么s只能从 [0, i - 1] 范围内挑选字符，
        // 来匹配t，所以 dp[i][j] = dp[i - 1][j]。
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[s.length - 1][t.length - 1]
}

/**
 * indexMap looks like:
 * a [0, 1, 5]
 * b [2, 4]
 * c [3]
 *
 * s: a a b c b a
 *
 * t: a b c
 *
 * space 2n + m => m + n
 * time nlog(m / n) + m + n
 */
// export function numDistinct(s: string, t: string): number {
//   if (s.length < t.length) {
//     return 0
//   }
//   let amount = 0
//   const indexMap: Record<string, Array<number>> = {}
//   // space n + m
//   // time n
//   for (let i = 0; i < t.length; i++) {
//     indexMap[t[i]] = []
//   }
//   // time m
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] in indexMap) {
//       indexMap[s[i]].push(i)
//     }
//   }

//   function helper(sIndex: number, tIndex: number) {
//     if (tIndex === t.length) {
//       amount++
//       return
//     }
//     const tChar = t[tIndex]
//     let left = 0,
//       right = indexMap[tChar].length - 1,
//       targetIndex = indexMap[tChar].length
//     while (left <= right) {
//       const mid = (left + right) >> 1
//       if (indexMap[tChar][mid] > sIndex) {
//         targetIndex = mid
//         right = mid - 1
//       } else {
//         left = mid + 1
//       }
//     }

//     for (let i = targetIndex; i < indexMap[tChar].length; i++) {
//       helper(indexMap[tChar][i], tIndex + 1)
//     }
//   }
//   helper(-1, 0)
//   return amount
// }
