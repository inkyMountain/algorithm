import {ListNode} from '../public'

// https://leetcode-cn.com/problems/add-two-numbers/
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const leadingNode = new ListNode(0)
  let exceed = 0
  let current = leadingNode
  // why cares about exceed > 0 here?
  // e.g. 999 + 999, in the end there's no node to travel 
  // but still need a additional plus operation for the fourth digit.
  while (l1 || l2 || exceed > 0) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + exceed
    current.next = new ListNode(sum % 10)
    current = current.next
    exceed = Math.floor(sum / 10)
    l1 = l1?.next
    l2 = l2?.next
  }
  return leadingNode.next
}
