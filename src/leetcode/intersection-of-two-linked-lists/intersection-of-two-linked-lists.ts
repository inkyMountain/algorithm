// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

import {ListNode} from '../public'

/**
 * 首先遍历 headA，将所有节点加入 set 中。
 * 然后遍历 headB，找到第一个位于 set 中的节点，就是相交节点。
 */
// export function getIntersectionNode(
//   headA: ListNode | null,
//   headB: ListNode | null
// ): ListNode | null {
//   const aListSet = new Set()

//   while (headA) {
//     aListSet.add(headA)
//     headA = headA.next
//   }
//   while (headB) {
//     if (aListSet.has(headB)) {
//       return headB
//     }
//     headB = headB.next
//   }
//   return null
// }

/**
 * 令 listA 成环，然后判断 listB 是否成环，如果成环，则两个链表相交。
 * 返回环的入口节点，就是相交节点。
 * 如果不成环，则链表不相交。
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const headARef = headA
  const headBRef = headB
  while (headA.next) {
    headA = headA.next
  }
  const tailA = headA
  // establish circle
  tailA.next = headARef

  let slow = headBRef,
    fast = headBRef
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
    if (fast !== null && fast === slow) {
      break
    }
  }
  // no intersection
  if (fast === null) {
    tailA.next = null
    return null
  }

  // has intersection
  let slow2 = headBRef
  while (slow !== slow2) {
    slow = slow.next
    slow2 = slow2.next
  }
  // remove the circle
  tailA.next = null

  return slow
}
