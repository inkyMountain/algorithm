/**
 * 使用 left 与 right 变量来记录遍历左括号和右括号
 */
export function longestValidParentheses(s: string): number {
  let left = 0, right = 0, maxLength = 0
  for (let i = 0; i < s.length; i++) {
  	const char = s[i]
    if (char === '(') {
    	left++
    } else {
      right++
    }
    if (left === right) {
    	maxLength = Math.max(left * 2, maxLength)
    } else if (right > left) {
    	right = 0
      left = 0
    }
  }

  left = 0, right = 0
  for (let i = s.length - 1; i >= 0; i--) {
  	const char = s[i]
    if (char === '(') {
    	left++
    } else {
      right++
    }
    if (left === right) {
    	maxLength = Math.max(left * 2, maxLength)
    } else if (left > right) {
    	right = 0
      left = 0
    }
  }
  
  return maxLength
};

/**
 * Another solution:
 * 使用一个栈，保持栈底始终为上一个未成功匹配的右括号。
 * 遍历每个字符，如果是 ( 则将其index推入。
 * 如果是 ) 则弹出栈顶元素，当前 ) 的index与弹栈后的栈顶元素之差，
 * 就有可能是答案，使用 Math.max 与当前 maxLength 进行比较与替换。
 */
// export function longestValidParentheses(s: string): number {
//   const stack = [-1]
//   let maxLength = 0
//   for (let i = 0; i < s.length; i++) {
//   	const char = s[i]
//     if (char === '(') {
//     	stack.push(i)
//     } else {
//     	stack.pop()
//       const top = stack[stack.length - 1]
//       if (stack.length === 0) {
//       	stack.push(i)
//       } else {
//       	const length = i - top
//         maxLength = Math.max(length, maxLength)
//       }
//     }
//   }
//   return maxLength
// };
