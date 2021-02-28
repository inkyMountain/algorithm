export class LinkedListNode {
  val: number;
  next: LinkedListNode | null;
  constructor(val: number, next?: LinkedListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class DoubleLinkedListNode {
  val: number;
  next: DoubleLinkedListNode | null;
  prev: DoubleLinkedListNode | null;
  constructor(val: number, prev: DoubleLinkedListNode | null, next?: DoubleLinkedListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next || null;
    this.prev = prev || null;
  }
}