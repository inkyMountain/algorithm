// https://leetcode-cn.com/problems/edit-distance/

export function minDistance(word1: string, word2: string): number {
  const dp = new Array(word1.length + 1)
    .fill(0)
    .map(() => new Array(word2.length + 1).fill(0))
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= word2.length; i++) {
    dp[0][i] = i
  }

  /**
   *             a         
        +-----+-----+           
        |  0  |  1  |           
        +-----+-----+
      a |  1  |  0  |           
        +-----+-----+           
      d |  2  |  1  |
        +-----+-----+
        For the number in the right bottom corner (which is 1),
        comes from these sources:
        edit: 1 + 1 = 2
        add: 2 + 1 = 3
        delete: 0 + 1 = 1
        So the min of these numbers is our answer.
   */
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          // edit
          dp[i - 1][j - 1] + 1,
          // delete
          dp[i - 1][j] + 1,
          // add
          dp[i][j - 1] + 1
        )
      }
    }
  }
  return dp[word1.length][word2.length]
}
