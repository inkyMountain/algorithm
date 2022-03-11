export function nextPermutation(nums: number[]): void {
  let current = nums.length - 1
  while (nums[current - 1] >= nums[current]) {
    current--
  }
  let left = current,
    right = nums.length - 1,
    target = nums[current - 1],
    index = nums.length
  if (current > 0) {
    while (left <= right) {
      const mid = (left + right) >> 1
      if (nums[mid] > target) {
        index = mid
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    ;[nums[index], nums[current - 1]] = [nums[current - 1], nums[index]]
  }
  reverse(nums, current, nums.length - 1)
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}
