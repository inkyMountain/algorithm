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
// @lc code=start
/**
 * 这种方法仍然是采用层序遍历，与传统的层序遍历不同的是，传统法需要使用一个队列来维护遍历的顺序，
 * 但由于这题中存在next指针，可以通过next指针，来获取右边的节点，因此可以省去队列。
 * 具体的，当遍历第N层时，建立的是第N+1层的next指针。
 * 这是因为节点(记为current)的右子节点，所需的next节点，是current.next.left。
 * 这样做方便了右子节点的next节点的获取。
 */
function connect(root: Node | null): Node | null {
  let mostLeft = root
  while (mostLeft !== null) {
    let current = mostLeft
    let nextMostLeft: Node = null
    // iterate current layer
    while (current !== null && current !== undefined) {
      if (current.left) {
        current.left.next = current.right
        if (current.next) {
          current.right.next = current.next.left ?? null
        }
      }

      // assign the node to nextMostLeft if it's the first node that has a left child.
      if (nextMostLeft === null && current.left !== null) {
        nextMostLeft = current.left
      }

      current = current.next
    }

    mostLeft = nextMostLeft
  }
  return root
}
/**
 * 使用广度优先遍历，在遍历当前层的时候，将当前节点的next指针，指向下一个节点。
 * 如果当前节点是当前层的最后一个节点，那么就不连接。
 */
// function connect(root: Node | null): Node | null {
//   if (root === null) {
//     return root
//   }
//   const queue: Node[] = [root]
//   /**
//    *   1
//    *  2 3
//    */
//   while (queue.length > 0) {
//     const length = queue.length
//     for (let i = 0; i < length; i++) {
//       const top = queue.shift()
//       if (i !== length - 1) {
//         top.next = queue[0]
//       }
//       if (top.left) {
//         queue.push(top.left)
//       }
//       if (top.right) {
//         queue.push(top.right)
//       }
//     }
//   }
//   return root
// }
// @lc code=end

// console.log(connect(new Node(1, new Node(2), new Node(3))))
console.log(
  connect(
    new Node(
      1,
      new Node(2, new Node(4), new Node(5)),
      new Node(3, new Node(6), new Node(7))
    )
  )
)
