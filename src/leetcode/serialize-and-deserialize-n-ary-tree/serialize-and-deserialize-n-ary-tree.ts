export class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

class Codec {
  constructor() {}

  // Encodes a tree to a single string.
  serialize(root: Node | null): string {
    let result = ''
    if (root === null) {
      return result
    }
    const stack = [root, null]
    while (stack.length > 0) {
      const length = stack.length
      for (let i = 0; i < length; i++) {
        const node = stack.shift()
        if (node === null) {
          result += ',_'
          continue
        }
        result += `,${node.val}`
        for (let child of node.children) {
          stack.push(child)
        }
        stack.push(null)
      }
    }
    return result.substring(1, result.length - 2)
  }

  // Decodes your encoded data to tree.
  deserialize(data: string): Node | null {
    if (data === '') {
      return null
    }
    const chars = data.split(',')
    const root = new Node(parseInt(chars.shift()))
    chars.shift()
    const stack = [root]
    while (stack.length > 0) {
      const parent = stack.shift()
      while (chars[0] !== '_' && chars.length > 0) {
        const node = new Node(parseInt(chars.shift()))
        parent.children.push(node)
      }
      chars.shift()
      stack.push(...parent.children)
    }
    return root
  }
}

// const codec = new Codec()
// const root = new Node(1)
// const rootChildren = [new Node(2), new Node(3), new Node(4)]
// rootChildren[1].children.push(new Node(5), new Node(6))
// root.children.push(...rootChildren)
// codec.deserialize(codec.serialize(root))
