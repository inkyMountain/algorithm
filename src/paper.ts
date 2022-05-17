/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
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

function sortList(head: ListNode | null): ListNode | null {
  // length of linked list
  let length = 0
  let current = head
  const dummyNode = new ListNode(0, head)
  while (current) {
    length++
    current = current.next
  }

  // length of subarray during merge sort
  let width = 1
  while (width < length) {
    let prev = dummyNode
    let start = dummyNode.next,
      current = start
    while (start) {
      const head1 = current
      for (let i = 0; i < width - 1 && current?.next; i++) {
        current = current.next
      }
      const tail1 = current
      current = current.next
      const head2 = current
      for (let i = 0; i < width - 1 && current?.next; i++) {
        current = current.next
      }
      const tail2 = current
      if (current) {
        current = current.next
      }
      start = current
      tail1.next = null
      if (tail2) {
        tail2.next = null
      }
      prev.next = merge(head1, head2)

      while (prev.next) {
        prev = prev.next
      }
    }
    width *= 2
  }

  return dummyNode.next
}

function merge(node1: ListNode | null, node2: ListNode | null) {
  const dummyNode = new ListNode(0)
  let current = dummyNode
  while (node1 && node2) {
    if (node1.val < node2.val) {
      current.next = node1
      node1 = node1.next
    } else {
      current.next = node2
      node2 = node2.next
    }
    current = current.next
  }
  let node = node1 || node2
  while (node) {
    current.next = node
    current = current.next
    node = node.next
  }
  return dummyNode.next
}
// @lc code=end

console.log(
  // sortList(new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))),
  sortList(
    new ListNode(
      -1,
      new ListNode(0, new ListNode(3, new ListNode(4, new ListNode(5)))),
    ),
  ),
)
