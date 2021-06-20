import {lowestCommonAncestor, TreeNode} from './lowestCommonAncestorBST';

test('minDiffInBST0', () => {
  const result = lowestCommonAncestor(
    new TreeNode(
      6,
      new TreeNode(
        2,
        new TreeNode(0),
        new TreeNode(4, new TreeNode(3), new TreeNode(5))
      ),
      new TreeNode(8, new TreeNode(7), new TreeNode(9))
    ),
    new TreeNode(2),
    new TreeNode(4)
  );
  expect(result.val).toStrictEqual(2);
});
