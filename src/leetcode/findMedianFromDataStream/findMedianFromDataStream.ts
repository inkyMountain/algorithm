// https://leetcode-cn.com/problems/find-median-from-data-stream/
export class MedianFinder {
  nums: Array<number> = []

  constructor() {}

  addNum(num: number): void {
    if (this.nums.length === 0) {
      this.nums.push(num)
      return
    }
    let left = 0,
      right = this.nums.length - 1
    let hasEqual = false
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (this.nums[mid] > num) {
        right = mid - 1
      } else if (this.nums[mid] < num) {
        left = mid + 1
      } else {
        hasEqual = true
        this.nums.splice(mid, 0, num)
        break
      }
    }
    if (!hasEqual) {
      this.nums.splice(left, 0, num)
    }
  }

  findMedian(): number {
    if (this.nums.length % 2 === 0) {
      const right = this.nums.length / 2
      return (this.nums[right] + this.nums[right - 1]) / 2
    } else {
      return this.nums[Math.floor(this.nums.length / 2)]
    }
  }
}
