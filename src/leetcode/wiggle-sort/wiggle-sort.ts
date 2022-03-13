// leetcode 324
// https://leetcode-cn.com/problems/wiggle-sort-ii/
export function wiggleSort(nums: number[]): void {
  // 可以使用快速选择算法优化，其平均时间复杂度是 O(n)
  nums.sort((a, b) => a - b)
  const index = Math.ceil(nums.length / 2)
  const left = nums.slice(0, index).reverse()
  const right = nums.slice(index).reverse()
  for (let i = 0; i < left.length; i++) {
    const num = left[i]
    nums[i * 2] = num
    if (right.length > 0) {
      nums[i * 2 + 1] = right.shift()
    }
  }
}
