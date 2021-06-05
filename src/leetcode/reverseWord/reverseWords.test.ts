import {reverseWords} from './reverseWords';

test('reverse words', () => {
  expect(reverseWords('the sky is blue')).toStrictEqual('blue is sky the');
});
