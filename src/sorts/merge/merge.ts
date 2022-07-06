export function mergeSort(nums: number[]) {
  let subarrayLength = 1
  const length = nums.length
  // 注意点：不要写成 subarrayLength < length - 1
  // 如果希望凑齐两个子数组，那么子数组长度一定比总数组长度要短。
  while (subarrayLength < length) {
    let startIndex = 0
    // length - startIndex 是剩余的数字个数，一定要比子数组长，
    // 才能凑齐两个子数组。
    while (length - startIndex > subarrayLength) {
      merge(
        nums,
        startIndex,
        // 注意 -1
        startIndex + subarrayLength - 1,
        startIndex + subarrayLength,
        // 注意Math.min和-1
        Math.min(startIndex + subarrayLength * 2 - 1, length - 1)
      )
      startIndex += subarrayLength * 2
    }
    subarrayLength *= 2
  }
  return nums
}

const temp = []
function merge(
  nums: number[],
  start1: number,
  end1: number,
  start2: number,
  end2: number
) {
  let index1 = start1,
    index2 = start2,
    index = 0
  // 需要是 &&，确保两个指针都没有超过对应的end。
  while (index1 <= end1 && index2 <= end2) {
    if (nums[index1] < nums[index2]) {
      temp[index] = nums[index1]
      index1++
    } else {
      temp[index] = nums[index2]
      index2++
    }
    index++
  }
  // 找到还没到达终点的指针
  // 注意是 index <= end1，不要漏了 =。
  let slowIndex = index1 <= end1 ? index1 : index2
  const end = index1 <= end1 ? end1 : end2
  while (slowIndex <= end) {
    temp[index] = nums[slowIndex]
    slowIndex++, index++
  }
  for (let i = 0; i < index; i++) {
    nums[i + start1] = temp[i]
  }
}
