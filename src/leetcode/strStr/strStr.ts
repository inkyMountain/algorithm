// https://leetcode-cn.com/problems/implement-strstr/

export function generateNext(m: string, next: Array<number>): Array<number> {
  let i = 1,
    j = 0;
  next[0] = 0;
  while (i < m.length && j < m.length - 1) {
    if (m.charAt(i) === m.charAt(j)) {
      next[i] = j + 1;
      i++;
      j++;
    } else {
      if (j > 0) {
        j = next[j - 1];
      } else {
        // if j === 0 and the two chars don't match,
        // meaning that next[i] is zero.
        i++;
        next[i] = 0;
      }
    }
  }
  return next;
}

export function strStr(haystack: string, needle: string): number {
  // the init value for fill method can be arbitrary
  const next = generateNext(needle, new Array(needle.length).fill(0));
  let i = 0,
    j = 0;
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j > 0) {
        j = next[j - 1];
      } else {
        i++;
      }
    }
  }
  if (j === needle.length) {
    return i - j;
  }
  return -1;
}
