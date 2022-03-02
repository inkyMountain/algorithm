// leetcode 384
class Solution {
  nums: Array<number>

  constructor(nums: number[]) {
    this.nums = nums
  }

  reset(): number[] {
    return this.nums
  }

  shuffle(): number[] {
    const copy = [...this.nums]
    const result = []
    for (let i = 0; i < this.nums.length; i++) {
      const index = Math.floor(Math.random() * copy.length)
      const temp = copy[index]
      copy[index] = copy[copy.length - 1]
      copy[copy.length - 1] = temp
      result.push(copy.pop())
    }
    return result
  }
}
