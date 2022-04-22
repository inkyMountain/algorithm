/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

export class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}
/**
 * 使用广度优先遍历，在遍历当前层的时候，将当前节点的next指针，指向下一个节点。
 * 如果当前节点是当前层的最后一个节点，那么就不连接。
 */
// @lc code=start
function connect(root: Node | null): Node | null {
  if (root === null) {
    return root
  }
  const queue: Node[] = [root]
  /**
   *   1
   *  2 3
   */
  while (queue.length > 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const top = queue.shift()
      if (i !== length - 1) {
        top.next = queue[0]
      }
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }
  }
  return root
}
// @lc code=end
