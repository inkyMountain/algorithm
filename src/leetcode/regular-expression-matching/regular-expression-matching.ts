export const isMatch = (s: string, p: string) => {
  if (s === null || p === null) return false

  const sLen = s.length,
    pLen = p.length

  const dp = new Array(sLen)
  for (let i = -1; i < dp.length; i++) {
    dp[i] = new Array(pLen).fill(false) // 将项默认为false
  }
  for (let i = 0; i < s.length; i++) {
    dp[i][-1] = false
  }
  dp[-1][-1] = true
  for (let j = 0; j < pLen; j++) {
    if (p[j] === '*') {
      dp[-1][j] = dp[-1][j - 2]
    }
  }
  // 迭代
  for (let i = 0; i < sLen; i++) {
    for (let j = 0; j < pLen; j++) {
      if (s[i] === p[j] || p[j] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j] === '*') {
        if (s[i] === p[j - 1] || p[j - 1] === '.') {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }
  return dp[sLen - 1][pLen - 1] // 长sLen的s串 是否匹配 长pLen的p串
}
