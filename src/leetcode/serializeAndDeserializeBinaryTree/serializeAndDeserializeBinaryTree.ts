// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

import TreeNode from '../../dataStructure/TreeNode'

const NULL = 'x'

export function serialize(root: TreeNode | null): string {
  const result = []
  const queue = [root]
  while (queue.length > 0) {
    const head = queue.shift()
    if (head === null) {
      result.push(NULL)
    } else {
      result.push(head.val)
      queue.push(head.left)
      queue.push(head.right)
    }
  }

  while (result[result.length - 1] === NULL) {
    result.pop()
  }

  return result.join('')
}

export function deserialize(data: string): TreeNode | null {
  if (data.length === 0) {
    return null
  }
  const treeArray = data.split('').map((val) => (val === NULL ? null : +val))
  return generateRootTreeNode(treeArray)
}

function generateRootTreeNode(nums: Array<number>) {
  const currentLayer: Array<TreeNode> = []
  const root = new TreeNode(nums.shift())
  currentLayer.push(root)
  while (nums.length > 0) {
    while (currentLayer[0] === null) {
      currentLayer.shift()
    }
    const length = currentLayer.length

    for (let i = 0; i < length; i++) {
      const node = currentLayer[i]
      const leftValue = nums.shift()
      if (leftValue !== undefined && leftValue !== null) {
        node.left = new TreeNode(leftValue)
      }
      const rightValue = nums.shift()
      if (rightValue !== undefined && rightValue !== null) {
        node.right = new TreeNode(rightValue)
      }
    }

    const nextLayer = []
    for (let i = 0; i < length; i++) {
      const node = currentLayer.shift()
      if (node.left !== null) {
        nextLayer.push(node.left)
      }
      if (node.right !== null) {
        nextLayer.push(node.right)
      }
    }
    currentLayer.length = 0
    for (let i = 0; i < nextLayer.length; i++) {
      currentLayer.push(nextLayer[i])
    }
  }

  return root
}
