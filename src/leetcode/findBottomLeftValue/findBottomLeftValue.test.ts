import {findBottomLeftValue, TreeNode} from './findBottomLeftValue';

test('postorderTraversal0', () => {
  // [1,2,3,4,5,6]
  const result = findBottomLeftValue(
    new TreeNode(
      2,
      new TreeNode(1, ),
      new TreeNode(3)
    )
  );
  expect(result).toStrictEqual(1);
});
