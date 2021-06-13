import {maxDepth, TreeNode} from './maxDepth';

test('postorderTraversal0', () => {
  const result = maxDepth(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(5))
    )
  );
  expect(result).toStrictEqual(3);
});
