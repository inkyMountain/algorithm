// leetcode 852

// export function peakIndexInMountainArray(arr: number[]): number {
//   let index = 0
//   while (arr[index] < arr[index + 1]) {
//     index++
//   }
//   return index
// }

// 二分法
export function peakIndexInMountainArray(arr: number[]): number {
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (mid > left) {
      // 如果左侧是递增序列，那么将范围缩小到 [mid, right]
      if (arr[mid] > arr[left] && arr[mid] > arr[mid - 1]) {
        left = mid
      } else {
        right = mid - 1
      }
    } else {
      // 将范围缩小到只有两个数字的时候，比如 80, 90。
      // 这时候上一个if无法正确判断，所以需要特殊处理。
      // 当右侧大的时候，将left移动至right处。
      if (arr[right] > arr[mid]) {
        left = right
      } else {
        right = left
      }
    }
  }
  return left
}
