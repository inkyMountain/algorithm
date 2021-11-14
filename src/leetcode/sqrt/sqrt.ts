// https://leetcode-cn.com/problems/sqrtx/
export function mySqrt(x: number): number {
  let left = 0,
    right = x,
    mid = Math.ceil((left + right) / 2)
  while (left < right) {
    if (mid * mid > x) {
      right = mid - 1
    } else {
      left = mid
    }
    mid = Math.ceil((left + right) / 2)
  }
  return right
}

// export function mySqrt(x: number): number {
//   let prev = 0
//   for (let i = 1; i * i <= x; i++) {
//     if (i * i === x) {
//       return i
//     } else {
//       prev = i
//     }
//   }
//   return prev
// }
