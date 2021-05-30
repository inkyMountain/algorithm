// https://leetcode-cn.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let char;
  const iterateTimes = Math.ceil(s.length / 2);
  for (let i = 0; i < iterateTimes; i++) {
    char = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = char;
  }
}
