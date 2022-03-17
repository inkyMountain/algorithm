/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
const operatorHandler = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.floor(a / b),
}

// 操作符优先级
const priority = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
}

const isOperator = (str: string) => {
  return str in operatorHandler
}

function normalizeString(s: string) {
  return s
    .replace(/\s/g, '')
    .split(/([+\-*/\s\(\)])/)
    .filter(Boolean)
}

function calculate(s: string): number {
  const tokens = normalizeString(s)
  let index = 0
  const numberStack: string[] = []
  const operatorStack: string[] = []

  function evaluate() {
    const num1 = numberStack.pop()
    const num2 = numberStack.pop()
    const operator = operatorStack.pop()
    const result = operatorHandler[operator](parseInt(num2), parseInt(num1))
    numberStack.push(result)
  }
  while (index < tokens.length) {
    const token = tokens[index]
    // 操作符
    if (isOperator(token)) {
      while (
        priority[operatorStack[operatorStack.length - 1]] >= priority[token]
      ) {
        evaluate()
      }
      operatorStack.push(token)
    }
    // 数字
    else {
      numberStack.push(token)
    }
    index++
  }

  while (operatorStack.length > 0) {
    evaluate()
  }
  return parseInt(numberStack[numberStack.length - 1])
}
// @lc code=end

test('normalizer', () => {
  expect(normalizeString('1+1')).toStrictEqual(['1', '+', '1'])
  expect(normalizeString('1+2* 3')).toStrictEqual(['1', '+', '2', '*', '3'])
})

test('basic calculator 2', () => {
  expect(calculate('1+1')).toStrictEqual(2)
  expect(calculate('1-1+1')).toStrictEqual(1)
  expect(calculate('1+2* 3')).toStrictEqual(7)
  expect(calculate(' 3/2 ')).toStrictEqual(1)
})
