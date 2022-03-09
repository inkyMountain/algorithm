/*
 * @lc app=leetcode.cn id=449 lang=typescript
 *
 * [449] 序列化和反序列化二叉搜索树
 */
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function serialize(root: TreeNode | null): string {
  let result = ''
  function traverse(node: TreeNode) {
    if (node === null) {
      return ''
    }
    result += `,${node.val}`
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)

  return result.substring(1)
}

function deserialize(data: string): TreeNode | null {
  if (!data) {
    return null
  }
  const nums = data.split(',')
  let index = 0
  function traverse(lower: number, higher: number) {
    if (index >= nums.length) {
      return null
    }
    const num = parseInt(nums[index])
    if (num <= lower || num >= higher) {
      return null
    }
    const node = new TreeNode(num)
    index++
    node.left = traverse(lower, num)
    node.right = traverse(num, higher)
    return node
  }
  return traverse(-Infinity, Infinity)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

const result = deserialize(serialize(null))
// const result = deserialize(
//   serialize(new TreeNode(2, new TreeNode(1), new TreeNode(3)))
// )

console.log(result)
