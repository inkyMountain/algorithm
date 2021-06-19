import {lowestCommonAncestor, TreeNode} from './lowestCommonAncestor';

test('findMode0', () => {
  const result = lowestCommonAncestor(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(2)))
  );
  expect(result).toStrictEqual([2]);
});

test('findMode1', () => {
  const result = lowestCommonAncestor(new TreeNode(0, null, new TreeNode(0)));
  expect(result).toStrictEqual([0]);
});
