import {countNodes, TreeNode} from './countNodes';

test('postorderTraversal0', () => {
  // [1,2,3,4,5,6]
  const result = countNodes(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(6))
    )
  );
  expect(result).toStrictEqual(6);
});
