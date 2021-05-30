import {reverseString} from './reverseString';

test('reverse string', () => {
  let str = ['h', 'e', 'l', 'l', 'o'];
  reverseString(str);
  expect(str).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
});
