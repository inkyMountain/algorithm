import {ListNode} from './leetcode/public'
/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/submissions/
 * 该方法被称为穿针引线法，因为next的改变很绕。
 * 假设 head 为 0, 1, 2, 3, 4,   left = 1, right = 4,
 * 建议以第二次操作为例子。
 * previous 为 left 前面一个 node，
 * current 为首次操作时的 previous 后面一个 node，后续不变。
 * next 始终为 current 后一个 node。
 */
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummyNode = new ListNode(0, head)
  let previous = dummyNode
  for (let i = 0; i < left - 1; i++) {
    previous = previous.next
  }
  let current = previous.next
  for (let i = 0; i < right - left; i++) {
    const next = current.next
    current.next = next.next
    next.next = previous.next
    previous.next = next
  }
  return dummyNode.next
}

// function reverseBetween(
//   head: ListNode | null,
//   left: number,
//   right: number
// ): ListNode | null {
//   if (left === right) {
//     return head
//   }
//   const dummyNode = new ListNode(0, head)
//   let index = 1
//   let previous = dummyNode,
//     current = head,
//     next = head.next

//   let leftNode = null,
//     nodeBeforeLeft = dummyNode,
//     rightNode = null,
//     nodeAfterRight = null

//   while (current) {
//     if (index === left) {
//       leftNode = current
//     } else if (index === left - 1) {
//       nodeBeforeLeft = current
//     } else if (index === right) {
//       rightNode = current
//     } else if (index === right + 1) {
//       nodeAfterRight = current
//     }
//     // save ref of left, node before left, and right, node after right
//     if (index > left && index <= right) {
//       current.next = previous
//     }
//     previous = current
//     current = next
//     next = next?.next
//     index++
//   }
//   nodeBeforeLeft.next = rightNode
//   leftNode.next = nodeAfterRight
//   return dummyNode.next
// }

const result = reverseBetween(new ListNode(3, new ListNode(5)), 1, 2)

console.log('result ==========>', result)
