/**
 * 预处理：
 * - 将开头的负号和中间部分的 (-转化为 0-和(0-，来避免处理负数。
 * - 在末尾加上一个 )，用于触发所有剩余的计算。
 * - 将输入的字符串转化为 tokens 数组。
 * 
 * 核心代码：
 * 分别创建 numbers 和 operators 数组，用于存放数字和操作符。
 * 遍历 tokens 数字，如果是
 * - 数字，则推入 numbers 数组。
 * - )，则触发计算，直到遇到"("或者操作符栈为空。
 * - 操作符，则触发计算，将所有比当前操作符优先级高的操作符计算完成。
 */
export const calculate = function (s: string): number {
  // take care, a trailing ) is required to trigger evaluation.
  s = s.startsWith('-') ? `0${s})` : `${s})`
  // remove all spaces
  s = s.replace(/\(\-/g, '(0-').replace(/\s/g, '')
  // remove all empty string
  const tokens = s.split(/([\()\+\-\*\/])/).filter(Boolean)

  const priority = {
    '+': 0,
    '-': 0,
    '*': 1,
    '/': 1,
    '(': undefined,
    ')': undefined,
  }

  const isNumber = (s: string) => !(s in priority)

  const operate = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  }

  // 0 + 2 - 3 + 5 * 5 - 1

  const numberStack = []
  const operatorStack = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (isNumber(token)) {
      numberStack.push(token)
    } else if (token === ')') {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !== '('
      ) {
        const [num1, num2] = [numberStack.pop(), numberStack.pop()]
        numberStack.push(
          operate[operatorStack.pop()](parseInt(num2), parseInt(num1))
        )
      }
      operatorStack.pop()
    } else {
      while (
        operatorStack.length &&
        priority[operatorStack[operatorStack.length - 1]] >= priority[token]
      ) {
        const [num1, num2] = [numberStack.pop(), numberStack.pop()]
        numberStack.push(
          operate[operatorStack.pop()](parseInt(num2), parseInt(num1))
        )
      }
      operatorStack.push(token)
    }
  }

  return numberStack[0]
}

console.log(calculate('1-1+1'))
