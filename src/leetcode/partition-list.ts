/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
 */
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
// @lc code=start
/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
  You should preserve the original relative order of the nodes in each of the two partitions.

  1 4 3 2 5 2
  1 2 2 4 3 5
  >= x 放在大的那个链表的末尾
  < x 放在小的那个链表的末尾
  最后连接两个链表，大的放在后面即可。
 */
function partition(head: ListNode | null, x: number): ListNode | null {
  if (head === null) {
    return head
  }
  let current = head,
    greaterHead: ListNode = null,
    greaterTail: ListNode = null,
    smallerHead: ListNode = null,
    smallerTail: ListNode = null
  while (current) {
    if (current.val >= x) {
      if (greaterHead === null) {
        greaterHead = current
        greaterTail = current
      } else {
        greaterTail.next = current
        greaterTail = current
      }
    }
    if (current.val < x) {
      if (smallerHead === null) {
        smallerHead = current
        smallerTail = current
      } else {
        smallerTail.next = current
        smallerTail = current
      }
    }
    current = current.next
  }
  if (smallerTail) {
    smallerTail.next = greaterHead
  }
  if (greaterTail) {
    greaterTail.next = null
  }
  return smallerHead || greaterHead
}
// @lc code=end
