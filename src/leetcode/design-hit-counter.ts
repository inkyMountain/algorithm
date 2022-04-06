/*
 * @lc app=leetcode.cn id=362 lang=typescript
 *
 * [362]
 */

// @lc code=start
class HitCounter {
  constructor() {}

  hits: number[] = []

  /**
   * 在一个升序数组中，找到指定的一个数字，所以使用二分搜索。
   * 
   * 其他的一些想法(但是不考虑这些的最简单解法已经能ac了...)：
   * what about infinite call to hit ?
   * Use a HashArray. If the array length exceed 300 seconds, delete the first element.
   * So that the timestamp array's length is kept thin.
   *
   * 另一个想法，hits 数组中可以存储对象，timestamp + count.
   */
  hit(timestamp: number): void {
    this.hits.push(timestamp)
  }

  getHits(timestamp: number): number {
    const target = timestamp - 300 + 1
    // index
    const index = this.binarySearch(0, this.hits.length - 1, target)
    return this.hits.length - index
  }

  // return index of the first timestamp that equals or is greater than target.
  binarySearch(left: number, right: number, target: number): number {
    let index = this.hits.length
    while (left <= right) {
      const mid = (left + right) >> 1
      if (this.hits[mid] >= target) {
        index = mid
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return index
  }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
// @lc code=end
