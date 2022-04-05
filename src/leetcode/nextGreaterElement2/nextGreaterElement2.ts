// https://leetcode-cn.com/problems/next-greater-element-ii/

// O(n^2)
// export function nextGreaterElements(nums: number[]): number[] {
//   const result = new Array(nums.length).fill(-1)
//   function nextIndex(index: number) {
//     if (index > nums.length - 1) {
//       return 0
//     } else {
//       return index + 1
//     }
//   }

//   outer: for (let i = 0; i < nums.length; i++) {
//     let index = nextIndex(i)
//     while (index !== i) {
//       if (nums[index] > nums[i]) {
//         result[i] = nums[index]
//         continue outer
//       }
//       index = nextIndex(index)
//     }
//   }

//   return result
// }

// Double the nums array to simulate circled array
// export function nextGreaterElements(nums: number[]): number[] {
//   const double = [...nums, ...nums]
//   const stack = []
//   const result = new Array(double.length).fill(-1)
//   for (let i = 0; i < double.length; i++) {
//     while (double[stack[stack.length - 1]] < double[i]) {
//       const top = stack.pop()
//       result[top] = double[i]
//     }
//     stack.push(i)
//   }
//   result.length = nums.length
//   return result
// }

// Doesn't double the nums array, but loop for doubled length to save space.
// Because double[i] always equals nums[i % nums.length].
export function nextGreaterElements(nums: number[]): number[] {
  const length = nums.length
  const stack = []
  const result = new Array(length).fill(-1)
  for (let i = 0; i < length * 2; i++) {
    const index = i % length
    while (nums[stack[stack.length - 1] % length] < nums[index]) {
      const top = stack.pop()
      result[top] = nums[index]
    }
    stack.push(i)
  }
  result.length = nums.length
  return result
}

// 2022.4.5 redo
// function nextGreaterElements(nums: number[]): number[] {
//   function getElementAt(index: number) {
//     const length = nums.length
//     index = index % length
//     return nums[index]
//   }

//   // 递减：栈底 -> 栈顶
//   const stack: number[] = []
//   const result: number[] = new Array(nums.length).fill(-1)
//   for (let i = 0; i < nums.length * 2; i++) {
//     while (
//       stack.length > 0 &&
//       getElementAt(i) > getElementAt(stack[stack.length - 1])
//     ) {
//       const top = stack.pop()
//       result[top] = getElementAt(i)
//     }
//     stack.push(i)
//   }
//   return result.slice(0, nums.length)
// }
