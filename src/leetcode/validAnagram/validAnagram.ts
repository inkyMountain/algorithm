// https://leetcode-cn.com/problems/valid-anagram/submissions/
// Is two words consists of same letters but shuffled.

export const validAnagram = (wordA: string, wordB: string): boolean => {
  const letterCounts = new Map();
  // Get the sum of each letter of wordA
  for (let i = 0; i < wordA.length; i++) {
    const char = wordA[i];
    if (typeof letterCounts.get(char) === 'undefined') {
      letterCounts.set(char, 1);
    } else {
      letterCounts.set(char, letterCounts.get(char) + 1);
    }
  }

  // Reduce every letter's count according to wordB
  for (let i = 0; i < wordB.length; i++) {
    const char = wordB[i];
    if (typeof letterCounts.get(char) === 'undefined') {
      letterCounts.set(char, -1);
    } else {
      letterCounts.set(char, letterCounts.get(char) - 1);
    }
  }

  // if every letter's count is zero, than it's true, else false.
  for (const count of letterCounts.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};
