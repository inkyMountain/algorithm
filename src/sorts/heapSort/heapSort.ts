/**
 * 注意点：
 * - 位运算需要加括号 e.g. (index << 1) + 1
 * -
 */
export function sortArray(nums: number[]) {
  for (let i = (nums.length - 1) >> 1; i >= 0; i--) {
    siftDown(nums, i, nums.length - 1)
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    ;[nums[0], nums[i]] = [nums[i], nums[0]]
    siftDown(nums, 0, i - 1)
  }
  return nums
}

function siftDown(nums: number[], index: number, end: number) {
  while ((index << 1) + 1 <= end) {
    const leftSon = (index << 1) + 1
    const rightSon = (index << 1) + 2
    let greater = nums[index] > nums[leftSon] ? index : leftSon
    if (rightSon <= end && nums[rightSon] > nums[greater]) {
      greater = rightSon
    }
    ;[nums[index], nums[greater]] = [nums[greater], nums[index]]
    if (index === greater) {
      break
    }
    index = greater
  }
}
