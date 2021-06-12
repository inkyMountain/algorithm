import {postorderTraversal, TreeNode} from './postorderTraversal';

test('postorderTraversal0', () => {
  const result = postorderTraversal(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
  );
  expect(result).toStrictEqual([3, 2, 1]);
});
