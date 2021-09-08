// https://leetcode-cn.com/problems/word-break/

/**
 * The solution:
 * given the string s, iterates from s.substr(0, 1) to s.substr(0, s.length).
 * Then iterates wordDict, if a word is the suffix the of substring, 
 * and the prefix is in the dp array (which means it meets the rule),
 * the whole substring meets the rule. so mark it true in the dp array.
 */
// export function wordBreak(s: string, wordDict: string[]): boolean {
//   const dp = new Array(s.length + 1).fill(true)
//   dp[0] = true
//   for (let i = 0; i < wordDict.length; i++) {
//     for (let j = 0; j <= s.length; j++) {
//       if (dp[j - 1]) {
//         dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
//       }
//     }
//   }
//   return dp[s.length]
// }
