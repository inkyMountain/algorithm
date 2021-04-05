// https://leetcode-cn.com/problems/remove-linked-list-elements/submissions/
import { generateHeadNode, ListNode } from "../public";

// Key solution: prepend a help node to avoid edge case handling. The value of the help node can be arbitrary.
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const newHead = new ListNode(0, head);
  let currentNode = newHead;
  while (currentNode.next !== null) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next || null;
    } else {
      currentNode = currentNode.next;
    }
  }
  return newHead.next;
}

console.log(removeElements(generateHeadNode([1, 2, 6, 3, 4, 5, 6]), 6));
console.log(removeElements(generateHeadNode([1, 1]), 1));
console.log(removeElements(generateHeadNode([]), 1));
