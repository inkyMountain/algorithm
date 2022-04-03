/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode = new ListNode(0, head)
  const nodes: ListNode[] = [dummyNode]
  while (head) {
    nodes.push(head)
    head = head.next
  }
  n = nodes.length - n
  nodes[n - 1].next = nodes[n - 1].next.next
  return dummyNode.next
}

/**
 * 1. 第一次遍历，获取链表的长度。
 * 2. 第二次遍历，移除目标节点。
 */
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let length = 0
//   const dummyNode = new ListNode(0, head)
//   while (head !== null) {
//     length++
//     head = head.next
//   }
//   let index = 0
//   n = length - n + 1
//   head = dummyNode
//   while (head) {
//     if (index === n - 1) {
//       head.next = head.next.next
//     }
//     index++
//     head = head.next
//   }
//   return dummyNode.next
// }
// @lc code=end
