// https://leetcode-cn.com/problems/serialize-and-deserialize-bst/

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

/**
 * 如果是普通的二叉树，那么序列化和反序列化，有两种方法。
 * 第一种是将null节点以_序列化，从而可以反序列化为唯一的二叉树。
 * 第二种是使用中序+先序或者中序+后序的方式。
 * 
 * 对于二叉搜索树，可以利用其性质，在递归建树时，
 * 限定一个节点的范围，如果超出这个范围，就说明当前递归函数不应该构建节点。
 * 这种限定范围的方法，与中序+先or后序的道理是相同的。
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
