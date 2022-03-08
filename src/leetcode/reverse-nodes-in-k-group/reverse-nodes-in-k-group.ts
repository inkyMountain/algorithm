import {ListNode} from '../public'

/**
 * 使用头插法，previous, current, next来局部翻转一个链表。
 */
export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null) {
    return head
  }
  const dummyNode = new ListNode(0, head)
  let previous: ListNode = dummyNode,
    current: ListNode,
    next: ListNode
  while (true) {
    let previousRef = previous
    // 首先判断剩余的node是否还有k个
    for (let i = 0; i < k; i++) {
      if (previousRef) {
        previousRef = previousRef.next
      }
    }
    // 不足k个节点，剩余的节点不需要翻转。
    if (previousRef === null) {
      return dummyNode.next
    }
    current = previous.next

    for (let i = 0; i < k - 1; i++) {
      next = current.next
      current.next = next.next
      next.next = previous.next
      previous.next = next
    }
    previous = current
  }
}
