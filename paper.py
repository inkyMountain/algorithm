class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m = len(strs)
        n = len(strs[0])
        def ge(i,j):
            for k in range(m):
                if strs[k][i] < strs[k][j]:
                    return False
            return True
        def LIS(s):
            dp = []
            for i in range(n):
                dp.append(1)
                for j in range(i):
                    if ge(i,j):
                        dp[i] = max(dp[i],dp[j]+1)
            return max(dp)
        return n - LIS(strs)

new Solution().minDeletionSize()
