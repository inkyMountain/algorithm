// https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/

const isNumber = (token: string) => {
  const parsedToken = parseInt(token);
  return typeof parsedToken === 'number' && !isNaN(parsedToken);
};

const evaluate = (a: number, b: number, operator: string) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (a / b > 0) {
        return Math.floor(a / b);
      } else {
        return Math.ceil(a / b);
      }
  }
};

export function evalRPN(tokens: string[]): number {
  const stack = [];
  while (tokens.length > 0) {
    const next = tokens.shift();
    if (isNumber(next)) {
      stack.push(next);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(evaluate(+a, +b, next));
    }
  }
  return stack[0];
}
