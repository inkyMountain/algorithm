// https://leetcode-cn.com/problems/4sum/

export function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return [];
  }

  const sorted = nums.sort((a, b) => a - b);
  const quatruplets = [];
  for (let i = 0; i < sorted.length; i++) {
    // Starting from the second loop, the value of sorted[i] should differs
    // from the previous or the quatruplet would be dupliate one.
    if (i > 0 && sorted[i] === sorted[i - 1]) {
      continue;
    }
    // Loop starts with i + 1 since the indexes of quatruplet are distinct.
    for (let j = i + 1; j < sorted.length; j++) {
      if (j > i + 1 && sorted[j] === sorted[j - 1]) {
        continue;
      }
      let left = j + 1,
        right = sorted.length - 1;
      while (left < right) {
        const num1 = sorted[i];
        const num2 = sorted[j];
        const num3 = sorted[left];
        const num4 = sorted[right];
        if (left > j + 1 && sorted[left] === sorted[left - 1]) {
          left++;
          continue;
        }

        if (num1 + num2 + num3 + num4 === target) {
          quatruplets.push([num1, num2, num3, num4]);
          left++;
        } else if (num1 + num2 + num3 + num4 > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return quatruplets;
}
