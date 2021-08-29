// https://leetcode-cn.com/problems/ones-and-zeroes/

/**
 * Problem analysis:
 * This is an application of 01 bag. It differs from the typical 01 bag that it has three dimensions.
 * First for the length of strs array, second for m and third for n.
 * dp[i][j][k] means when
 * 1. i length of strs
 * 2. zeros amount is max to j
 * 3. ones amount max to k
 * how many of strs can be taken.
 * The transition formula is
 * when m >= zeros && n >= ones:
 * dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeros][k - ones] + 1)
 * when m < zeros || n < ones:
 * dp[i][j][k] = dp[i - 1][j][k]
 *
 * If we reuse the dp array, the transition formula becomes
 * when m >= zeros && n >= ones:
 * dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1)
 * when m < zeros || n < ones:
 * dp[j][k] = dp[j][k]
 *
 * @param strs string array
 * @param m the max count of zeros
 * @param n the max count of ones
 */

// This is space optimized solution
// export function findMaxForm(strs: string[], m: number, n: number): number {
//   const dp = []
//   // initialize the dp array
//   for (let i = 0; i <= m; i++) {
//     for (let j = 0; j <= n; j++) {
//       dp[i] = dp[i] || []
//       dp[i][j] = 0
//     }
//   }
//
//   // i loop must start from 1 to strs.length
//   // i means the length of strs array
//   for (let i = 1; i <= strs.length; i++) {
//     const str = strs[i - 1]
//     const {ones, zeros} = calcNumbers(str)
//     for (let j = m; j >= zeros; j--) {
//       for (let k = n; k >= ones; k--) {
//         dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1)
//       }
//     }
//   }
//   return dp[m][n]
// }

// This is space unoptimized solution, space complexity is O(lmn + L),
// in which L means total length of strings in strs array.
export function findMaxForm(strs: string[], m: number, n: number): number {
  const dp = []
  // initialize the dp array
  for (let i = 0; i <= strs.length; i++) {
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i] = dp[i] || []
        dp[i][j] = dp[i][j] || []
        dp[i][j][k] = i === 0 ? 0 : -Infinity
      }
    }
  }

  for (let i = 1; i <= strs.length; i++) {
    const str = strs[i - 1]
    const {ones, zeros} = calcNumbers(str)
    for (let j = m; j >= 0; j--) {
      for (let k = n; k >= 0; k--) {
        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(
            dp[i][j][k],
            dp[i - 1][j - zeros][k - ones] + 1
          )
        } else {
          dp[i][j][k] = dp[i - 1][j][k]
        }
      }
    }
  }
  return dp[strs.length][m][n]
}

export const calcNumbers = (str: string) => {
  const zeros = str.split('').filter((char) => char === '0').length
  const ones = str.length - zeros
  return {zeros, ones}
}
