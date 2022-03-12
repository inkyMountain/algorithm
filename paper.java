public class paper {
  public static void main(String args[]) {
    int[] array = { 7, 6, 4, 3, 1 };
    var result = new Solution().maxProfit(array);
    System.out.println(result);
  }
}

class Solution {
  public int maxProfit(int[] prices) {
    if (prices == null || prices.length == 0) {
      return 0;
    }
    int length = prices.length;
    int[][] dp = new int[length][2];
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (int i = 1; i < length; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    return dp[length - 1][0];
  }
}
