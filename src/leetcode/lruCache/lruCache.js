/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

/**
 * 注意事项：
 * - ListNode 需要有 key & value 属性。
 * - LinkedList size 属性需要随着新增与删除而变化。
 * - 删除与新增节点时，注意节点的双向箭头。最好提取一个connect方法，连接两个节点。
 */
// @lc code=start
class ListNode {
  key
  val
  constructor(key, val) {
    this.val = val
    this.key = key
  }
  // 本节点的前一个节点
  next
  // 本节点的后一个节点
  prev
}

class LinkedList {
  // list的容量
  capacity
  // 目前已经放了几个值
  size = 0

  dummyHead = new ListNode(0, 0)
  dummyTail = new ListNode(0, 0)
  constructor(capacity) {
    this.capacity = capacity
    this.connect(this.dummyHead, this.dummyTail)
  }

  // 从列表中删除输入的 ListNode 对象
  delete(node) {
    this.connect(node.prev, node.next)
    this.size--
    return node
  }
  // 删除列表中的最后一个节点，因为它是最不经常被使用的。
  deleteLast() {
    // 当链表中没有元素时，不做任何删除操作。
    if (this.dummyHead.next === this.dummyTail) {
      return null
    }
    return this.delete(this.dummyTail.prev)
  }

  // 将输入的节点插入到列表的头部
  insertAtHead(node) {
    const next = this.dummyHead.next
    this.connect(this.dummyHead, node)
    this.connect(node, next)
    this.size++
  }

  // 将输入的节点插入链表的头部
  moveToHead(node) {
    this.delete(node)
    this.insertAtHead(node)
  }

  connect(prevNode, nextNode) {
    prevNode.next = nextNode
    nextNode.prev = prevNode
  }
}

class LRUCache {
  list
  // key为数字，值为ListNode对象。用于快速在双向链表中找到值为目标数字的节点。
  valIndexes = {}
  constructor(capacity) {
    this.list = new LinkedList(capacity)
  }

  get(key) {
    if (key in this.valIndexes) {
      const node = this.valIndexes[key]
      this.list.moveToHead(node)
      return node.val
    }
    return -1
  }

  put(key, value) {
    // 如果数字已存在，则直接替换它的value。
    if (key in this.valIndexes) {
      const node = this.valIndexes[key]
      node.val = value
      this.list.moveToHead(node)
    }
    // 如果数字之前不存在，则考虑容量是否已满。
    else {
      if (this.list.size >= this.list.capacity) {
        // 删除列表中的第一个节点，同时根据被删除节点的key，同步删除 valIndexes 中对节点的引用。
        const deletedNode = this.list.deleteLast()
        // 如果 deletedNode 不是 null，才删除 valIndexes 中的对应节点。
        if (deletedNode) {
          delete this.valIndexes[deletedNode.key]
        }
      }
      // 接下来插入目标值。这是无论链表是否满了都要进行的操作。
      const nodeToInsert = new ListNode(key, value)
      this.valIndexes[key] = nodeToInsert
      this.list.insertAtHead(nodeToInsert)
    }
  }
}
// @lc code=end

const cache = new LRUCache(2)

console.log(
  cache.put(1, 1),
  cache.put(2, 2),
  cache.get(1),
  // 1 2
  // 3 1
  cache.put(3, 3),
  cache.get(2)
)
