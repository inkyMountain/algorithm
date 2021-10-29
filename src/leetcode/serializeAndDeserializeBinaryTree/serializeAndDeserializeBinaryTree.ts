// https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

import TreeNode from '../../dataStructure/TreeNode'

const NULL = 'x'

export function serialize(root: TreeNode | null): string {
  const result = []
  // maintain a queue for tree nodes
  const queue = [root]
  while (queue.length > 0) {
    // push the head into result, and meanwhile push its children into queue.
    const head = queue.shift()
    if (head === null) {
      result.push(NULL)
    } else {
      result.push(head.val)
      queue.push(head.left)
      queue.push(head.right)
    }
  }

  // remove trailing successive null value
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
    // remove starting successive null values
    while (currentLayer[0] === null) {
      currentLayer.shift()
    }
    const length = currentLayer.length

    // assign left&right to current layer
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

    // temporary store current layer's children in nextLayer
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

    // replace current layer with next layer and continue next loop
    currentLayer.length = 0
    for (let i = 0; i < nextLayer.length; i++) {
      currentLayer.push(nextLayer[i])
    }
  }

  return root
}


// the following is the preorder dfs solution.
// it's slower than bfs.
function serialize2(root: TreeNode | null): string {
  let result = []
  function dfs(node: TreeNode | null) {
    if (node === null) {
      result.push(NULL)
      return
    }
    result.push(node.val)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return result.join(',')
}

function deserialize2(data: string): TreeNode | null {
  const nodes = data.split(',')
  console.log(nodes)
  function dfs() {
    if (nodes[0] === NULL) {
      nodes.shift()
      return null
    }
    const node = new TreeNode(+nodes.shift())
    node.left = dfs()
    node.right = dfs()
    return node
  }
  return dfs()
}
