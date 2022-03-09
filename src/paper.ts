const reversePairs = (nums: number[]): number => {
  let amount = 0
  let groupLength = 1
  // O(n) space
  const temp = []
  // O(nlogn) time
  while (nums.length > groupLength) {
    let start = 0
    while (nums.length - start > groupLength) {
      let mid = start + groupLength,
        end = start + groupLength * 2 - 1
      end = Math.min(nums.length - 1, end)
      amount += merge(nums, start, mid, end, temp)
      start = end + 1
    }
    groupLength *= 2
  }
  console.log(nums, amount)
  return amount
}

function merge(
  nums: number[],
  start: number,
  mid: number,
  end: number,
  temp: number[]
) {
  const midRef = mid
  const startRef = start
  let index = 0
  let amount = 0
  while (start < midRef && mid <= end) {
    if (nums[start] <= nums[mid]) {
      temp[index] = nums[start]
      start++
      amount += mid - midRef
    } else {
      temp[index] = nums[mid]
      mid++
    }
    index++
  }
  let from, to
  if (mid > end) {
    from = start
    to = midRef - 1
    // amount += (mid - midRef) * (to - from + 1)
  } else {
    from = mid
    to = end
  }
  for (let i = from; i <= to; i++) {
    temp[index] = nums[i]
    if (mid > end) {
      amount += mid - midRef
    }
    index++
  }
  for (let i = startRef; i <= end; i++) {
    nums[i] = temp[i - startRef]
  }
  return amount
}

sort([2, 3, 1, 4])
sort([2, 3, 1, 4, 1])
sort([2, 3, 1, 4, 1, 1])
