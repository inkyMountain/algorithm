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
