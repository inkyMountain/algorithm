// https://leetcode-cn.com/problems/word-break/

/**
 * The solution:
 * given the string s, iterates from s.substr(0, 1) to s.substr(0, s.length).
 * Then iterates wordDict, if a word is the suffix the of substring,
 * and the prefix is in the dp array (which means it meets the rule),
 * the whole substring meets the rule. so mark it true in the dp array.
 */
export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    const str = s.slice(0, i)
    for (let j = 0; j < wordDict.length; j++) {
      // cut branch
      if (str.length < wordDict[j].length) {
        continue
      }
      // suffix of str that equals wordDict[j]
      const suffix = str.slice(str.length - wordDict[j].length)
      // the rest of suffix 
      const rest = str.slice(0, str.length - wordDict[j].length)
      const isRestMeetsRule = dp[rest.length] && suffix === wordDict[j]
      if (isRestMeetsRule) {
        dp[i] = true
      }
    }
  }
  return dp[s.length]
}
