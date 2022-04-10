function missingElement(nums: number[], k: number): number {
  const firstNum = nums[0]
  let left = 0,
    right = nums.length,
    index = nums.length
  while (left <= right) {
    const mid = (left + right) >> 1
    const offset = nums[mid] - (mid + firstNum)
    if (offset >= k) {
      index = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return index + firstNum + k - 1
}

console.log(missingElement([4, 7, 9, 10], 1)) // 5
console.log(missingElement([4, 7, 9, 10], 3)) // 8
console.log(missingElement([1, 2, 4], 3)) // 6
