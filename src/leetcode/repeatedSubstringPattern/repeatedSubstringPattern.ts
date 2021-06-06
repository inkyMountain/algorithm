// https://leetcode-cn.com/problems/repeated-substring-pattern/

import {strStr} from '../strStr/strStr';

export function repeatedSubstringPattern(s: string): boolean {
  const subStr = (s + s).substr(1, s.length * 2 - 2);
  return strStr(subStr, s) > -1;
}
