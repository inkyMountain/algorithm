// https://leetcode-cn.com/problems/linked-list-cycle-ii/
import {ListNode} from '../public'

// solution1: Use Set to record visited nodes so we know if a node has been
// visited;
// export function linkedCycleList2(head: ListNode | null): ListNode | null {
//   if (head === null) {
//     return null
//   }
//   const visited = new Set()
//   while (head.next) {
//     visited.add(head)
//     if (visited.has(head.next)) {
//       return head.next
//     }
//     head = head.next
//   }
//   return null
// }

export function linkedCycleList2(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head
  while (fast !== null) {
    if (fast) {
      fast = fast.next
    }
    if (fast) {
      fast = fast.next
    }
    if (slow) {
      slow = slow.next
    }

    // fast !== null: in case of fast or slow reach the end, but fast === slow evaluates true.
    if (fast === slow && fast !== null) {
      let slow2 = head
      while (slow !== slow2) {
        slow = slow.next
        slow2 = slow2.next
      }
      return slow
    }
  }
  return null
}
