export const findKthLargest = (nums: Array<number>, k: number): number => {
  // if it's a one-number array or empty one, return it directly.
  if (nums.length === 1) {
    return nums[0]
  }
  return _sort(nums, 0, nums.length - 1, k)
}

const _sort = (
  array: Array<number>,
  start: number,
  end: number,
  k: number
): number => {
  if (start >= end) {
    return array[end]
  }
  const pivot = array[start]
  let left = 0
  let right = 0
  let index = start + 1
  while (left + right < end - start) {
    if (pivot < array[index]) {
      left++
      index++
    } else {
      // this's an error i ever made.
      // DO NOT use array.length - right - 1.
      swap(array, index, end - right)
      right++
    }
  }
  swap(array, start + left, start)

  if (left + start + 1 === k) {
    return array[left + start]
  } else if (left + start + 1 > k) {
    const result = _sort(array, start, start + left - 1, k)
    if (result !== undefined) {
      return result
    }
  } else {
    const result = _sort(array, start + left + 1, end, k)
    if (result !== undefined) {
      return result
    }
  }
}

const swap = (array: Array<number>, index1: number, index2: number) => {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}
