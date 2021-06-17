import {mergeTrees, TreeNode} from './mergeTrees';

test('mergeTrees0', () => {
  // [1,2,3,4,5,6]
  const result = mergeTrees(
    new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)),
    new TreeNode(
      2,
      new TreeNode(1, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(7))
    )
  );
  expect(result).toStrictEqual(
    new TreeNode(
      3,
      new TreeNode(4, new TreeNode(5), new TreeNode(4)),
      new TreeNode(5, null, new TreeNode(7))
    )
  );
});
