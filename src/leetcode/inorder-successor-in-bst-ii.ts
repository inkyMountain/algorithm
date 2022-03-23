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

/**
 * 考虑三种情况：
 * - node 变量是否有右子节点
 * - 如果没有右子节点，它是父节点的左节点还是右节点。
 * - 如果 node 是 root。
 */
export function inorderSuccessor(node: Node | null): Node | null {
  if (node.right) {
    node = node.right
    while (node.left) {
      node = node.left
    }
    return node
  }

  /**
   * 找到第一个为左节点的节点，返回其父节点。
   * 这概括了几种情况：
   * - node 是没有右子节点的 root
   * - node 是没有右子节点，且是某个节点的右节点
   * - node 是没有右子节点，且是某个节点的左节点
   */
  while (node.parent && node.parent.left !== node) {
    node = node.parent
  }
  return node.parent
}
