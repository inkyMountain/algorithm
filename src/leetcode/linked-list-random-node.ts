/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
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

class Solution {
  head: ListNode | null
  constructor(head: ListNode | null) {
    this.head = head
  }

  getRandom(): number {
    let index = 1
    let current = this.head
    let result = current.val
    while (current !== null) {
      if (Math.ceil(Math.random() * index) === 1) {
        result = current.val
      }
      current = current.next
      index++
    }
    return result
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end
