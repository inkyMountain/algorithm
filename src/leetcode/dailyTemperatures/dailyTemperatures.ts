// https://leetcode-cn.com/problems/daily-temperatures/

// O(n^2)
// export function dailyTemperatures(temperatures: number[]): number[] {
//   const result = new Array(temperatures.length).fill(0)
//   outer: for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[j] > temperatures[i]) {
//         result[i] = j - i
//         continue outer
//       }
//     }
//   }
//   return result
// }

// O(n)
export function dailyTemperatures(temperatures: number[]): number[] {
  // At first i tried to copy result, so i can use copy.shift()
  // to get next temperature. it eased my operation but drastically 
  // increase the time consumed. So instead I use in-place operation
  // and it saved lots of time.
  const result = new Array(temperatures.length).fill(0)
  const stack = []

  let nextIndex = 0
  while (nextIndex < temperatures.length) {
    const next = temperatures[nextIndex]
    while (temperatures[stack[stack.length - 1]] < next) {
      const top = stack.pop()
      result[top] = nextIndex - top
    }
    stack.push(nextIndex)
    nextIndex++
  }
  return result
}
