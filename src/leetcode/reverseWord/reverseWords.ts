// https://leetcode-cn.com/problems/reverse-words-in-a-string/
const reverseArray = (array: Array<string>) => {
  let left = 0,
    right = array.length - 1;
  while (left < right) {
    [array[left], array[right]] = [array[right], array[left]];
    left++;
    right--;
  }
  return array;
};

export function reverseWords(s: string): string {
  const chars = s.split('');
  const words = [];
  let isInAWord = false;
  let word = [];
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (char === ' ') {
      if (isInAWord) {
        words.push(word.join(''));
        word = [];
        isInAWord = false;
      }
    } else {
      word.push(char);
      isInAWord = true;
    }
  }
  if (word.length > 0) {
    words.push(word.join(''));
  }

  return reverseArray(words).join(' ');
}
