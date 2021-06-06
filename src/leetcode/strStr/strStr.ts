// https://leetcode-cn.com/problems/implement-strstr/

export function strStr(haystack: string, needle: string): number {
  if (needle === '') {
    return 0;
  }

  let index = 0;
  while (index + needle.length <= haystack.length) {
    // see if current index match needle
    let lastMatchCharIndex = 0;
    for (let i = 0; i < needle.length; i++) {
      const charInHaystack = haystack.charAt(index + i);
      const charInNeedle = needle.charAt(i);
      if (charInHaystack !== charInNeedle) {
        lastMatchCharIndex = i - 1;
        break;
      }
      if (i === needle.length - 1) {
        lastMatchCharIndex = i;
      }
    }
    if (lastMatchCharIndex === -1) {
      index++;
      continue;
    }
    if (lastMatchCharIndex === needle.length - 1) {
      return index;
    }

    // if doesn't match, caculate the length we need to move.
    let maxEqualNumber = 0;
    for (let i = 0; i < lastMatchCharIndex + 1; i++) {
      let equalNumber = 0;
      const matchedSubStr = needle.substring(0, i + 1);
      for (let j = 0; j < i; j++) {
        const prefix = matchedSubStr.substr(0, j + 1);
        const suffix = matchedSubStr.substr(-j - 1);
        if (prefix === suffix && prefix.length > equalNumber) {
          equalNumber = prefix.length;
        }
      }
      if (equalNumber > maxEqualNumber) {
        maxEqualNumber = equalNumber;
      }
    }
    const step =
      maxEqualNumber === 0 ? 1 : lastMatchCharIndex - maxEqualNumber + 1;
    index += step;
  }
  return -1;
}
