import {subsetsWithDup} from './subsetsWithDup';

test('subsetsWithDup0', () => {
  const result = subsetsWithDup([4, 4, 4, 1, 4]);
  expect(result).toStrictEqual([
    [],
    [1],
    [1, 4],
    [1, 4, 4],
    [1, 4, 4, 4],
    [1, 4, 4, 4, 4],
    [4],
    [4, 4],
    [4, 4, 4],
    [4, 4, 4, 4],
  ]);
});
