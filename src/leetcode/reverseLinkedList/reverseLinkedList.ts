// https://leetcode-cn.com/problems/reverse-linked-list/
import { generateHeadNode, ListNode } from "../public";

// solution1: recursion
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

// solution2: traverse the linkedlist, change next's target to previous.
// function reverseList(head: LinkedListNode | null): LinkedListNode | null {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   let current: LinkedListNode = head;
//   let previous: LinkedListNode = null;
//   while (current) {
//     const next = current.next || null;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//   return previous;
// }

const head = generateHeadNode([1, 2, 3, 4, 5]);
const result = reverseList(head);
console.log("result", result);
