import {strStr, generateNext} from './strStr';

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

test('strStr4', () => {
  expect(strStr('mississippi', 'pi')).toStrictEqual(9);
});

test('next', () => {
  const str = 'abababca';
  expect(generateNext(str, new Array(str.length).fill(0))).toStrictEqual([
    0,
    0,
    1,
    2,
    3,
    4,
    0,
    1,
  ]);
});
