import {ListNode} from './leetcode/public'

function getIntersectionNode(
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
    if (fast.next) {
      fast = fast.next
    }
    if (fast.next) {
      fast = fast.next
    }
    if (slow.next) {
      slow = slow.next
    }
    if (fast !== null && fast === slow) {
      break
    }
  }
  // no intersection
  if (fast === null) {
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

const xxx = new ListNode(8, new ListNode(4))

const result = getIntersectionNode(
  new ListNode(4, new ListNode(1, xxx)),
  new ListNode(5, new ListNode(6, new ListNode(1, xxx)))
)

console.log('result ==========>', result)

/**
 * [4,1,8,4]
 * [5,6,1,8,4]
 */
