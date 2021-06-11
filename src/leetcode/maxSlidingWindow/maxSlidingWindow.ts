// https://leetcode-cn.com/problems/sliding-window-maximum/

export function maxSlidingWindow(nums: number[], k: number): number[] {
  // keep numbers in queue ranked from bigger to smaller.
  // before push new number into queue, pop all numbers that's
  // smaller than the new number.
  const queue = [];
  const result = [];
  // 1. push first k number into queue
  for (let i = 0; i < k; i++) {
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);
  }
  result.push(nums[queue[0]])

  for (let i = k; i < nums.length; i++) {
    // pop all numbers that's smaller than the new number.
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    // push index rather than the true value, for convenience of comparing the
    // index of numbers, to see whether it's within sliding window.
    queue.push(i);
    // the first number in queue is the biggest and might be the number
    // we're looking for. we should ensure its index is within the sliding
    // window.
    while (queue.length > 0 && queue[0] < (i - k + 1)) {
      queue.shift();
    }
    // then the number at index 0 is the biggest in the sliding window.
    result.push(nums[queue[0]])
  }


  return result;
}





