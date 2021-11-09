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
  // 用于记录lru存储的上限
  size: number = 0

  constructor() {
    this.head = new LinkedNode({key: null, val: 0})
    this.tail = new LinkedNode({key: null, val: 0})
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  // 将一个链表节点放在链表尾部
  append(node: LinkedNode) {
    const prev = this.tail.prev
    prev.next = node
    node.prev = prev

    node.next = this.tail
    this.tail.prev = node

    this.size++
  }

  // 删除一个节点
  delete(node: LinkedNode) {
    const prev = node.prev
    const next = node.next
    prev.next = next
    next.prev = prev
    this.size--
    return node.val
  }

  // 删除链表中的第一个节点
  deleteFirst() {
    const first = this.head.next
    if (first === this.tail) {
      return
    }
    return this.delete(first)
  }
}

export class LRUCache {
  // 使用哈希结构存储链表节点
  map: {[key: number]: LinkedNode} = {}
  linkedList: LinkedList
  // lru 缓存的存储上限
  capacity: number

  constructor(capacity: number) {
    this.linkedList = new LinkedList()
    this.capacity = capacity
  }

  get(key: number): number {
    const node = this.map[key]
    // 如果key没有对应的value，应该返回-1，所以默认为-1。
    let value = -1
    if (node) {
      // 如果能取到值，则返回它。
      value = node.val.val
      // 将这个值移到链表的最后
      this.linkedList.delete(node)
      this.linkedList.append(node)
    }
    // 返回取到的值
    return value
  }

  put(key: number, val: number): void {
    /**
     * 1. 如果超出容量限制，则删除链表中的第一个元素。
     * 2. 如果没有超出容量限制，但是这个key已经存在了，那么删除原来的key，加入链表尾部。
     * 3. 如果没有超出容量限制，且key不存在，那么直接加入链表尾部。
     */
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

    // 放入哈希map和链表
    this.map[key] = node
    this.linkedList.append(node)
    return null
  }
}

const cache = new LRUCache(10)
cache.put(1, 1)
