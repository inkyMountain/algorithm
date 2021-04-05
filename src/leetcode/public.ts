export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class DoubleLinkedListNode {
  val: number;
  next: DoubleLinkedListNode | null;
  prev: DoubleLinkedListNode | null;

  constructor(
    val: number,
    prev: DoubleLinkedListNode | null,
    next?: DoubleLinkedListNode | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.next = next || null;
    this.prev = prev || null;
  }
}

// traverse generation
export const generateHeadNode = (
  values: number[],
  index: number | undefined = 0,
  tailConnectIndex?: number
) => {
  let tail: ListNode = null;
  let previousNode: ListNode = null;
  let tailConnectNode: ListNode = null;
  let currentNode: ListNode = null;
  for (let i = values.length - 1; i >= 0; i--) {
    currentNode = new ListNode(values[i], previousNode);
    previousNode = currentNode;
    if (i === tailConnectIndex) {
      tailConnectNode = currentNode;
    }
    if (i === values.length - 1) {
      tail = currentNode;
    }
  }

  if (tailConnectNode) {
    tail.next = tailConnectNode;
  }
  return currentNode;
};

// recurse generation
// let cycleNode: ListNode = null;
// export const generateHeadNode = (
//   array: number[],
//   index: number | undefined = 0,
//   tailConnectTo?: number
// ) => {
//   if (index === array.length) {
//     // if the linkedList has cycle condition
//     if (typeof tailConnectTo === 'number' && cycleNode !== null) {
//       return cycleNode;
//     } else {
//       return null;
//     }
//   }
//
//   const node = new ListNode(
//     array[index],
//     generateHeadNode(array, index + 1, tailConnectTo)
//   );
//   if (index === tailConnectTo) {
//     cycleNode = node;
//   }
//   return node;
// };
