// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

export function replaceSpace(s: string): string {
  const result = new Array(s.length * 3);
  let i = 0,
    j = 0;
  while (j < s.length) {
    const char = s[j];
    if (char === ' ') {
      result[i] = '%';
      result[i + 1] = '2';
      result[i + 2] = '0';
      i += 3;
    } else {
      result[i] = char;
      i++;
    }
    j++;
  }
  return result.join('')
}
