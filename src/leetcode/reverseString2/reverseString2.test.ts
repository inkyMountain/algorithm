import {reverseStr} from './reverseString2';

test('revrese string', () => {
  const result = reverseStr('abcdefg', 2);
  expect(result).toStrictEqual('bacdfeg');
});
