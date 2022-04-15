export class Node {
  val: number
  left: Node | null
  right: Node | null
  constructor(val?: number, left?: Node | null, right?: Node | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// function treeToDoublyList(root: Node | null): Node | null {
//   if (root === null) {
//     return null
//   }
//   const nodes: Node[] = []
//   function dfs(node: Node | null) {
//     if (node === null) {
//       return
//     }
//     dfs(node.left)
//     nodes.push(node)
//     dfs(node.right)
//   }
//   dfs(root)

//   // [1, 2, 3]
//   for (let i = 0; i < nodes.length - 1; i++) {
//     const current = nodes[i]
//     const next = nodes[i + 1]
//     current.right = next
//     next.left = current
//   }
//   const first = nodes[0]
//   const last = nodes[nodes.length - 1]
//   first.left = last
//   last.right = first
//   return first
// }

/**
 * todo
 * 优化dfs过程，每次push node，都将该node和数组中的上一个node连接起来，
 * 然后 shift 上一个 node。由于 JS 中 shift 效率很低，
 * 所以可以采用两个变量（previous & current）代替数组。
 * 每次 push 时，previous = current, current = node, link(previous, current)。
 * 最后将头尾两个 node 连接，就完成操作了。
 */
function treeToDoublyList(root: Node | null): Node | null {
  if (root === null) {
    return root
  }
  let firstNode: Node | null = null
  let lastNode: Node | null = null
  let previous: Node | null = null
  let current: Node | null = null

  function push(node: Node) {
    if (firstNode === null) {
      firstNode = node
    }
    lastNode = node
    if (current === null) {
      current = node
      return
    }

    previous = current
    current = node
    previous.right = current
    current.left = previous
  }

  function dfs(node: Node | null) {
    if (node === null) {
      return
    }
    dfs(node.left)
    push(node)
    dfs(node.right)
  }
  dfs(root)

  firstNode.left = lastNode
  lastNode.right = firstNode
  return firstNode
}

const root = new Node(2, new Node(1), new Node(3))
console.log(treeToDoublyList(root))
