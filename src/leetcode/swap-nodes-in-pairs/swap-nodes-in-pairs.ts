/**
 * leetcode no.24
 */

import {ListNode} from '../public'

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode = new ListNode(0, head)
  let previous = dummyNode
  while (previous.next && previous.next.next) {
    let current = previous.next,
      next = current.next
    current.next = next.next
    next.next = previous.next
    previous.next = next
    previous = current
  }
  return dummyNode.next
}
