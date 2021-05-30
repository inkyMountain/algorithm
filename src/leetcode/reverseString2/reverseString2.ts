// https://leetcode-cn.com/problems/reverse-string-ii/submissions/

export function reverseStr(s: string, k: number): string {
  if (k === 1) {
    return s;
  }

  const chars = s.split('');

  for (let i = 0; i < chars.length; i = i + 2 * k) {
    // startIndex & endIndex refer to the range where subString should be
    // reversed.
    const startIndex = i;
    const endIndex = Math.min(i + k - 1, s.length - 1);
    let char;
    for (let j = startIndex; j <= Math.floor((endIndex - startIndex) / 2) + startIndex; j++) {
      char = chars[j];
      chars[j] = s[endIndex - (j - startIndex)];
      chars[endIndex - (j - startIndex)] = char;
    }
  }
  return chars.join('');
}
