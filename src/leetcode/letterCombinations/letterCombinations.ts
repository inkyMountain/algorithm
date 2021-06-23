// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function letterCombinations(digits: string): string[] {

}

const helper = () => {};
