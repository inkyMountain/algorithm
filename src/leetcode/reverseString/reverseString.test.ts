import {reverseString} from './reverseString';

test('four sum', () => {
  let str = ['h', 'e', 'l', 'l', 'o'];
  reverseString(str);
  expect(str).toStrictEqual(['o', 'l', 'l', 'e', 'h']);
});
