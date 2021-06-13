import {isSymmetric, TreeNode} from './isSymmetric';

test('isSymmetric0', () => {
  const result = isSymmetric(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
  );
  expect(result).toStrictEqual(false);
});

test('isSymmetric1', () => {
  const result = isSymmetric(new TreeNode(1));
  expect(result).toStrictEqual(true);
});
