import {reverseLeftWords} from './reverseLeftWords';

test('reverseLeftWords', () => {
  expect(reverseLeftWords('abcdefg', 2)).toStrictEqual('cdefgab');
});
