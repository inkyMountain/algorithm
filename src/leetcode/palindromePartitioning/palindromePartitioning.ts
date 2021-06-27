// https://leetcode-cn.com/problems/palindrome-partitioning/

const isPalindrome = (s: string) => {
  let left = 0,
    right = s.length - 1;
  let result = true;
  while (left < right) {
    if (s[left] !== s[right]) {
      result = false;
    }
    left++;
    right--;
  }
  return result;
};

export function partition(s: string): string[][] {
  const partitionings = [];
  const result = [];
  const partition = (startIndex: number) => {
    if (startIndex === s.length) {
      result.push([...partitionings]);
      return;
    }
    for (let i = startIndex; i < s.length; i++) {
      const subStr = s.substring(startIndex, i + 1);
      if (!isPalindrome(subStr)) {
        continue;
      }
      partitionings.push(subStr);
      partition(i + 1);
      partitionings.pop();
    }
  };
  partition(0);
  return result;
}
