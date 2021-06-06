// https://leetcode-cn.com/problems/valid-parentheses/

export function validParentheses(s: string): boolean {
  const pairs = {
    '{': '}',
    '(': ')',
    '[': ']',
  };
  const unmatches = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char in pairs) {
      unmatches.push(pairs[char]);
    } else {
      const isMatch = unmatches[unmatches.length - 1] === char;
      if (isMatch) {
        unmatches.pop();
      } else {
        return false;
      }
    }
  }
  return unmatches.length === 0;
}
