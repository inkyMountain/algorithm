import {insertIntoBST, TreeNode} from './insertIntoBST';

test('insertIntoBST0', () => {
  const result = insertIntoBST(null, 5);
  expect(result).toStrictEqual(new TreeNode(5));
});
