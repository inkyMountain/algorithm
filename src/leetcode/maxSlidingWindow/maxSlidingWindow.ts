// https://leetcode-cn.com/problems/sliding-window-maximum/

// export function maxSlidingWindow(nums: number[], k: number): number[] {
//   let left = 0,
//     right = k - 1;
//   const maxSlidingWindow: Array<number> = [];
//   let max = nums[left];
//   let index = left;
//   while (index <= right) {
//     if (nums[index] > max) {
//       max = nums[index];
//     }
//     index++;
//   }
//   while (right < nums.length) {
//     if (nums[right] > max) {
//       max = nums[right];
//     }
//     maxSlidingWindow.push(max);
//     left++;
//     right++;
//   }
//   return maxSlidingWindow;
// }

export function maxSlidingWindow(nums: number[], k: number): number[] {
  let queue = []
  for (let i = 0; i < k; i++) {
    nums[i]
  }
}





