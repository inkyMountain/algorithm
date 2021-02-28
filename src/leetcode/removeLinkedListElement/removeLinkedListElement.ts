// https://leetcode-cn.com/problems/remove-linked-list-elements/submissions/
import { LinkedListNode } from "../public";

// Key solution: prepend a help node to avoid edge case handling. The value of the help node can be arbitrary.
function removeElements(head: LinkedListNode | null, val: number): LinkedListNode | null {
  const newHead = new LinkedListNode(0, head);
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

const generateHeadNode = (array: number[], index: number | undefined = 0) => {
  if (index === array.length) {
    return null;
  }

  return new LinkedListNode(array[index], generateHeadNode(array, index + 1));
};

console.log(removeElements(generateHeadNode([1, 2, 6, 3, 4, 5, 6]), 6));
console.log(removeElements(generateHeadNode([1, 1]), 1));
console.log(removeElements(generateHeadNode([]), 1));
