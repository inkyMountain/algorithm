function canConstruct(ransomNote: string, magazine: string): boolean {
  const chars: Record<string, any> = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine.charAt(i);
    chars[char] = chars[char] ?? 0;
    chars[char]++;
  }

  for (let j = 0; j < ransomNote.length; j++) {
    const char = ransomNote.charAt(j);
    if (!chars[char]) {
      return false;
    } else {
      chars[char]--;
    }
  }
  return true;
}

const result = canConstruct('fuck', 'fucyou');
console.log('result ==========>', result);
