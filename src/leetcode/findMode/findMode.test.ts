import {findMode, TreeNode} from './findMode';

test('findMode0', () => {
  const result = findMode(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(2)))
  );
  expect(result).toStrictEqual([2]);
});

test('findMode1', () => {
  const result = findMode(new TreeNode(0, null, new TreeNode(0)));
  expect(result).toStrictEqual([0]);
});
