export function isValid(s: string): boolean {
  const stack: string[] = [];
  const leftSet = new Set();
  leftSet.add("(");
  leftSet.add("[");
  leftSet.add("{");

  const matchMap = new Map()
  matchMap.set('(', ')')
  matchMap.set('[', ']')
  matchMap.set('{', '}')
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (leftSet.has(current)) {
      stack.push(current)
    } else {
      const top = stack.pop()
      if (matchMap.get(top) !== current) {
        return false
      }
    }
  }
  return stack.length === 0
}
