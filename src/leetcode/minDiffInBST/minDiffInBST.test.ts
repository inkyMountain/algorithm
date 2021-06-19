import {minDiffInBST, TreeNode} from './minDiffInBST';

test('minDiffInBST0', () => {
  const result = minDiffInBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(6)
    )
  );
  expect(result).toStrictEqual(false);
});
