import {isValidBST, TreeNode} from './isValidBST';

test('isValidBST0', () => {
  const result = isValidBST(
    new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7))
    )
  );
  expect(result).toStrictEqual(false);
});
