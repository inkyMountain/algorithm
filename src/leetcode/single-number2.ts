/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  /**
   * 10001 10001 10001 10000
   */
  const bitwise: number[] = new Array(32).fill(0)
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = 0; j < 32; j++) {
      const tail = num & 1
      // 这里既可以用 >>> 也可以用 >>，这是因为它们的差别是向右移动后，
      // 用 0 还是用符号位来填充产生的空缺。
      // 但是这里并不在意使用 0 或者 1 来填补空缺，只右移 32 次，
      // 不会涉及到填充后的数字。
      num = num >>> 1
      const currentIndex = bitwise.length - 1 - j
      if (tail === 0) {
        continue
      }
      // tail === 1
      if (bitwise[currentIndex] < 2) {
        bitwise[currentIndex]++
      } else {
        bitwise[currentIndex] = 0
      }
    }
  }

  // bitwise 中的每一位均为 0 或 1，对应目标数字的每一个 bit 位。
  let result = 0
  for (let i = 0; i < bitwise.length; i++) {
    const bit = bitwise[i]
    result |= bit << (bitwise.length - i - 1)
  }
  return result
}

// var singleNumber = function (nums) {
//   let ans = 0
//   for (let i = 0; i < 32; ++i) {
//     let total = 0
//     for (const num of nums) {
//       total += (num >> i) & 1
//     }
//     if (total % 3 != 0) {
//       ans |= 1 << i
//     }
//   }
//   return ans
// }

// @lc code=end

// console.log(singleNumber([0b10001, 0b10001, 0b10001, 0b10000]))
console.log(singleNumber([-2, -2, -2]))
console.log(singleNumber([-3, -3, -3]))
console.log(singleNumber([3, 3, 3]))
console.log(singleNumber([3, 3, 3, 4]))
console.log(singleNumber([-2, -2, -2, -4]))
// console.log(singleNumber([-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]))
