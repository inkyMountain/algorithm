// https://leetcode-cn.com/problems/valid-palindrome/submissions/

function isAlphanumeric(charCode: number) {
  return (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57);
}

export function isPalindrome(s: string) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i).toLowerCase();
    if (isAlphanumeric(char.charCodeAt(0))) {
      str += char;
    }
  }
  let left = 0,
    right = str.length - 1;
  while (left <= right) {
    const leftChar = str.charAt(left);
    const rightChar = str.charAt(right);
    if (leftChar !== rightChar) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
