interface NodeVal {
  key: number
  val: number
}

class LinkedNode {
  prev: LinkedNode | null = null
  next: LinkedNode | null = null
  val: NodeVal

  constructor(val: NodeVal) {
    this.val = val
  }
}

class LinkedList {
  head: LinkedNode
  tail: LinkedNode
  size: number = 0

  constructor() {
    this.head = new LinkedNode({key: null, val: 0})
    this.tail = new LinkedNode({key: null, val: 0})
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  // append a node at the tail
  append(node: LinkedNode) {
    const prev = this.tail.prev
    prev.next = node
    node.prev = prev
    node.next = this.tail
    this.tail.prev = node
    this.size++
  }

  delete(node: LinkedNode) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
    this.size--
    return node.val
  }

  deleteFirst() {
    const first = this.head.next
    if (first === this.tail) {
      return
    }
    return this.delete(first)
  }
}

export class LRUCache {
  map: {[key: number]: LinkedNode} = {}
  linkedList: LinkedList
  capacity: number

  constructor(capacity: number) {
    this.linkedList = new LinkedList()
    this.capacity = capacity
  }

  get(key: number): number {
    const node = this.map[key]
    let value = -1
    if (node) {
      value = node.val.val
      this.linkedList.delete(node)
      this.linkedList.append(node)
    }
    return value
  }

  put(key: number, val: number): void {
    if (this.linkedList.size === this.capacity && !(key in this.map)) {
      const {key} = this.linkedList.deleteFirst()
      delete this.map[key]
    }
    const node = new LinkedNode({key, val})
    // this key may has already been put into map and linkedList, so delete
    // it first and then append it, in order to make it closer to the tail.
    if (key in this.map) {
      this.linkedList.delete(this.map[key])
    }
    this.map[key] = node
    this.linkedList.append(node)
    return null
  }
}
