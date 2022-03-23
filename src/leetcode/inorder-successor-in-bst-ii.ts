// https://leetcode-cn.com/problems/inorder-successor-in-bst-ii/

/**
 * Definition for a binary tree node.
 */

class Node {
  val: number
  left: Node | null
  right: Node | null
  parent: Node | null
  constructor(
    val?: number,
    left?: Node | null,
    right?: Node | null,
    parent?: Node | null
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.parent = parent === undefined ? null : parent
  }
}

export function inorderSuccessor(node: Node | null): Node | null {
  function mostLeftChildOf(node: Node | null) {
    while (node && node.left) {
      node = node.left
    }
    return node
  }
  if (node.parent === null) {
    return mostLeftChildOf(node.right)
  }
  if (node.parent.left === node) {
    return node.right ? mostLeftChildOf(node.right) : node.parent
  }

  if (node.parent.right === node) {
    if (node.right) {
      return mostLeftChildOf(node.right)
    } else {
      let current = node
      while (true) {
        if (current.parent === null) {
          return null
        } else if (current.parent.left === current) {
          return current.parent
        } else {
          current = current.parent
        }
      }
    }
  }
}
