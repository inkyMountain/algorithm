import {letterCombinations, TreeNode} from './letterCombinations';

test('isValidBST0', () => {
  const result = letterCombinations(
    new TreeNode(
      5,
      new TreeNode(4),
      new TreeNode(6, new TreeNode(3), new TreeNode(7))
    )
  );
  expect(result).toStrictEqual(false);
});
