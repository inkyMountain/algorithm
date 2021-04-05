// https://leetcode-cn.com/problems/design-linked-list/
import { ListNode } from "../public";

class LinkedList {
  // The true amount of nodes, prefix & suffix are excluded.
  length: number = 0;
  head: ListNode;
  tail: ListNode;

  constructor() {
    const virtualSuffix = new ListNode(0, null);
    const virtualPrefix = new ListNode(0, virtualSuffix);
    this.head = virtualPrefix;
    this.tail = virtualSuffix;
  }

  getNodeAt(index: number) {
    const isIndexValid = index >= 0 && index < this.length;
    if (!isIndexValid) {
      return null;
    }

    let node = this.head;
    for (let i = 0; i < index + 1; i++) {
      node = node.next;
    }
    return node;
  }

  get(index: number): number {
    const node = this.getNodeAt(index);
    return node === null ? -1 : node.val;
  }

  addAtHead(val: number): void {
    const node = new ListNode(val, this.head.next);
    this.head.next = node;
    this.length++;
  }

  addAtTail(val: number): void {
    const node = new ListNode(val, this.tail);
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    // after while loop, current is now the node before tail
    current.next = node;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
      return;
    }
    if (index >= this.length) {
      this.addAtTail(val);
      return;
    }
    let nodeBeforeIndex: ListNode = this.head;
    for (let i = 0; i < index; i++) {
      nodeBeforeIndex = nodeBeforeIndex.next;
    }
    nodeBeforeIndex.next = new ListNode(val, nodeBeforeIndex.next);
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index > this.length - 1) {
      return;
    }
    let nodeBeforeIndex: ListNode = this.head;
    for (let i = 0; i < index; i++) {
      nodeBeforeIndex = nodeBeforeIndex.next;
    }
    nodeBeforeIndex.next = nodeBeforeIndex.next.next;
    this.length--;
  }

  get nodeValues() {
    const values = [];
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
      values.push(current.val);
    }
    return values;
  }

  printNodeValues() {
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
      console.log(current.val);
    }
    console.log("\n");
  }
}

const operations = ["MyLinkedList","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","addAtTail","addAtTail","deleteAtIndex","addAtHead","addAtHead","get","addAtTail","addAtHead","get","addAtTail","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","get","addAtIndex","addAtHead","get","addAtHead","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtIndex","addAtTail","addAtHead","get","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtHead","addAtHead","addAtTail","addAtTail","get","get","addAtHead","addAtTail","addAtTail","addAtTail","addAtIndex","get","addAtHead","addAtIndex","addAtHead","addAtTail","addAtTail","addAtIndex","deleteAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","addAtTail","addAtHead","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","deleteAtIndex","get","get","addAtHead","get","addAtTail","addAtTail","addAtIndex","addAtIndex","addAtHead","addAtTail","addAtTail","get","addAtIndex","addAtHead","deleteAtIndex","addAtTail","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtTail","addAtTail"];
const params = [[],[38],[66],[61],[76],[26],[37],[8],[5],[4],[45],[4],[85],[37],[5],[93],[10,23],[21],[52],[15],[47],[12],[6,24],[64],[4],[31],[6],[40],[17],[15],[19,2],[11],[86],[17],[55],[15],[14,95],[22],[66],[95],[8],[47],[23],[39],[30],[27],[0],[99],[45],[4],[9,11],[6],[81],[18,32],[20],[13],[42],[37,91],[36],[10,37],[96],[57],[20],[89],[18],[41,5],[23],[75],[7],[25,51],[48],[46],[29],[85],[82],[6],[38],[14],[1],[12],[42],[42],[83],[13],[14,20],[17,34],[36],[58],[2],[38],[33,59],[37],[15],[64],[56],[0],[40],[92],[63],[35],[62],[32]];
let instance: LinkedList
const returnValues = [];
for (let i = 0; i < operations.length; i++) {
  const operation = operations[i];
  const param = params[i];
  if (operation === 'MyLinkedList') {
    instance = new LinkedList();
    continue;
  }
  const returnValue = instance[operation](...param);
  returnValues.push(returnValue);
}

console.log('returnValues', returnValues);
