// https://leetcode-cn.com/problems/3sum/

export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  const triplets: number[][] = [];
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    // 1. If num1 equals previous loop, the result would be same. So
    // continue next loop to avoid duplicate triplet.
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }

    const num1 = nums[i];
    // 2. The left pointer should starts from i + 1 since the question said
    // the three numbers don't have same index.
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const num2 = sorted[left];
      const num3 = sorted[right];
      if (left > i + 1 && num2 === nums[left - 1]) {
        left++;
        continue;
      }

      if (num1 + num2 + num3 === 0) {
        triplets.push([num1, num2, num3]);
        left++;
      }
      // 3. Move proper pointer depending on sum value.
      else if (num1 + num2 + num3 > 0) {
        right--;
      } else {
        // When num1 + num2 + num3 < 0, move the left pointer forward. So
        // the sum of three grows.
        left++;
      }
    }
  }
  return triplets;
}
