// https://leetcode-cn.com/problems/trapping-rain-water/

export function trap(height: number[]): number {
  let total = 0
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0
    for (let j = 0; j < i; j++) {
      if (height[j] > leftMax) {
        leftMax = height[j]
      }
    }
    let rightMax = 0
    for (let j = i + 1; j < height.length; j++) {
      if (height[j] > rightMax) {
        rightMax = height[j]
      }
    }
    const capacity = Math.min(leftMax, rightMax) - height[i];
    if (capacity > 0) {
      total += capacity
    }
  }
  return total
}
