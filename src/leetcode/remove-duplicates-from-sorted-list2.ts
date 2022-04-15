/*
 * @lc app=leetcode.cn id=82 lang=typescript
 *
 * [82] 删除排序链表中的重复元素 II
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

// time: O(n)  space: O(1)
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head
  }
  const dummyNode = new ListNode(0, head)
  let current = dummyNode

  // D 1 3
  while (current) {
    if (
      current.next &&
      current.next.next &&
      current.next.val === current.next.next.val
    ) {
      const duplicateValue = current.next.val
      while (current.next && current.next.val === duplicateValue) {
        current.next = current.next.next
      }
    } else {
      current = current.next
    }
  }
  return dummyNode.next
}

// time O(n)  space O(n)
// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   if (head === null) {
//     return head
//   }
//   const dummyNode = new ListNode(0, head)
//   let current = head
//   const duplicateSet = new Set<number>()

//   // add all duplicates into duplicateSet
//   while (current) {
//     if (current.next !== null && current.val === current.next.val) {
//       duplicateSet.add(current.val)
//     }
//     current = current.next
//   }

//   current = dummyNode
//   while (current) {
//     while (duplicateSet.has(current.next?.val)) {
//       current.next = current.next.next
//     }
//     current = current.next
//   }
//   return dummyNode.next
// }
// @lc code=end
