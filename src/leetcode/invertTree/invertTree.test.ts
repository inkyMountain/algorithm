import {inorderTraversal, TreeNode} from './inorderTraversal';

test('postorderTraversal0', () => {
  const result = inorderTraversal(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
  );
  expect(result).toStrictEqual([1, 3, 2]);
});
