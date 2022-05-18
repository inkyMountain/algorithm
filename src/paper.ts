/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  // 最小堆
  new Heap()
}

class Heap {
  nums: number[] = []

  get size() {
    return this.nums.length
  }

  comparator(a: number, b: number) {
    return b - a
  }

  siftUp(index: number) {}

  siftDown(index: number) {}

  extract(): number {}

  insert(num: number) {}

  head() {
    return this.nums[0]
  }
}
// @lc code=end
