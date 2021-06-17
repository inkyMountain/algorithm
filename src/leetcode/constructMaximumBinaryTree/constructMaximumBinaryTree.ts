// https://leetcode-cn.com/problems/maximum-binary-tree/submissions/

/**
 * Definition for a binary tree node.
 */

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

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return construct(nums, 0, nums.length - 1)
};

function construct(nums: number[], leftIndex: number, rightIndex: number) {
  if (leftIndex > rightIndex) {
    return null
  }
  const {max, index} = maxNum(nums, leftIndex, rightIndex)
  const root = new TreeNode(max)
  root.left = construct(nums, leftIndex, index - 1)
  root.right = construct(nums, index + 1, rightIndex)
  return root
}

function maxNum(nums: number[], leftIndex: number, rightIndex: number) {
  let max = nums[leftIndex]
  let index = leftIndex
  for (let i = leftIndex; i < rightIndex + 1; i++) {
    if (nums[i] > max) {
      max = nums[i]
      index = i
    }
  }
  return {
    max, index
  }
}
