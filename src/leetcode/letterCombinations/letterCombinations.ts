// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

const letterMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

export function letterCombinations(digits: string): string[] {
  if (digits === '') {
    return []
  }
  const result = [];
  let combo = [];
  let index = 0;

  function recurse() {
    if (combo.length === digits.length) {
      result.push(combo.join(''));
      return;
    }
    const matchedLetters = letterMap[digits[index]];
    for (let i = 0; i < matchedLetters.length; i++) {
      combo.push(matchedLetters[i]);
      index++;
      recurse();
      combo.pop();
      index--;
    }
  }

  recurse();
  return result;
}
