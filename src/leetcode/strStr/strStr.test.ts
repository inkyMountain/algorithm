import {strStr} from './strStr';

test('strStr0', () => {
  expect(strStr('dasabcdabcaafsdj', 'abca')).toStrictEqual(7);
});

test('strStr1', () => {
  expect(strStr('dasabcbafsdj', 'af')).toStrictEqual(7);
});

test('strStr2', () => {
  expect(strStr('dasabcbafsdj', 'z')).toStrictEqual(-1);
});

test('strStr3', () => {
  expect(
    strStr(
      'abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba',
      'bbbbbbaa'
    )
  ).toStrictEqual(118);
});
