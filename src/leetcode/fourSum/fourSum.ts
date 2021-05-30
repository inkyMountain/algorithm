// https://leetcode-cn.com/problems/4sum-ii/

function getCombination(nums1: number[], nums2: number[]) {
  // In this condition Map is 3x faster than Object
  const combination = new Map();
  for (let i = 0; i < nums1.length; i++) {
    const num1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const num2 = nums2[j];
      const sum = num1 + num2;
      combination.set(sum, combination.get(sum) ?? 0);
      combination.set(sum, combination.get(sum) + 1);
    }
  }
  return combination;
}

function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[]
): number {
  // Divide four arrays into two groups, A+B & C+D.
  // Enumerate every combination in A+B, and save these combination in a set.
  const combination1 = getCombination(nums1, nums2);
  // Secondly enumerate combinations in C+D.
  const combination2 = getCombination(nums3, nums4);
  let total = 0;
  for (let [sum, amount] of combination1) {
    // For every item in combination1, if there's a match which sum into zero
    // in combination2, increase the count by one.
    if (combination2.get(-sum) && amount) {
      total += combination2.get(-sum) * amount;
    }
  }
  // Finally the count would be the answer.
  return total;
}
