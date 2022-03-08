import {ListNode} from '../public'

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const resultDummyNode = new ListNode(0)

  let newNode = resultDummyNode
  let exceed = 0
  while (l1 || l2) {
    const value1 = l1 ? l1.val : 0
    const value2 = l2 ? l2.val : 0
    const sum = value1 + value2 + exceed
    newNode.next = new ListNode(sum % 10)
    exceed = Math.floor(sum / 10)
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
    newNode = newNode.next
  }
  if (exceed > 0) {
    newNode.next = new ListNode(exceed)
  }
  return resultDummyNode.next
}
