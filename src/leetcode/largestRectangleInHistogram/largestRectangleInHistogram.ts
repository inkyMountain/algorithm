// https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

// export function largestRectangleArea(heights: number[]): number {
//   const stack = []
//   const rightMap = {}
//   const leftMap = {}
//   for (let i = 0; i < heights.length; i++) {
//     while (heights[stack[stack.length - 1]] > heights[i]) {
//       const top = stack.pop()
//       rightMap[top] = i
//     }
//     stack.push(i)
//   }

//   stack.length = 0
//   for (let i = heights.length - 1; i >= 0; i--) {
//     while (heights[stack[stack.length - 1]] > heights[i]) {
//       const top = stack.pop()
//       leftMap[top] = i
//     }
//     stack.push(i)
//   }

//   let max = 0
//   for (let i = 0; i < heights.length; i++) {
//     const left = (leftMap[i] ?? -1) + 1
//     const right = (rightMap[i] ?? heights.length) - 1
//     const width = right - left + 1
//     const dimension = width * heights[i]
//     max = Math.max(dimension, max)
//   }
//   return max
// }

// export function largestRectangleArea(heights: number[]): number {
//   const stack = []
//   const rightMap = {}
//   const leftMap = {}
//   let max = 0

//   for (let i = 0; i < heights.length; i++) {
//     while (heights[stack[stack.length - 1]] > heights[i]) {
//       const top = stack.pop()
//       rightMap[top] = i
//     }
//     stack.push(i)
//     if (stack[stack.length - 2] !== undefined) {
//       leftMap[stack[stack.length - 1]] = stack[stack.length - 2]
//     }
//     const left = leftMap[i] ?? 0
//     const right = rightMap[i] ?? 0
//     const width = right - left - 1
//     const height = heights[i]
//     const dimension = width * height
//     max = Math.max(dimension, max)
//   }

//   return max
// }

export function largestRectangleArea(heights: number[]): number {
  const stack = [0]
  let max = 0
  heights.push(0)
  heights.unshift(0)

  for (let i = 1; i < heights.length; i++) {
    while (heights[stack[stack.length - 1]] > heights[i]) {
      const top = stack.pop()
      const left = stack[stack.length - 1]
      const dimension = (i - left - 1) * heights[top];
      max = Math.max(dimension, max)
    }
    stack.push(i)
  }

  return max
}
