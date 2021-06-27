import {partition} from './palindromePartitioning';

test('partition0', () => {
  const result = partition('aab');
  expect(result).toStrictEqual([
    ['a', 'a', 'b'],
    ['aa', 'b'],
  ]);
});
