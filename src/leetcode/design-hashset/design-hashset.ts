/**
 * 705 涉及哈希映射
 * 首先是哈希算法，用于决定数据存储的位置。
 * 使用 key % 一个质数可以一定程度上避免哈希冲突。
 * 然后是存储问题，使用一个数组来存储值。
 * 由于哈希可能存在冲突，所以使用二维数组的来存储冲突的值。
 * 
 * 复杂度分析：
 * 假设Set存储的值个数为n，链表的总数是b。
 * 因为哈希冲突的原因，b不总是等于n。
 * 假设值的分布是均匀的，那么每个链表存储的值个数为 n / b个。
 * 那么由于每次remove, add, contains操作需要遍历链表，
 * 所以时间复杂度是 n / b个。
 * 
 * 注意：上面的链表在代码中实际对应的是数组，因为js没有链表这个结构。
 * 在其他语言中(比如Java)，使用的是链表。
 */
class MyHashSet {
  constructor() {}

  store: Array<Array<number>> = []

  add(key: number): void {
    const index = this.hash(key)
    this.store[index] = this.store[index] || []
    const array = this.store[index]
    if (!array.includes(key)) {
      array.push(key)
    }
  }

  hash(key: number) {
    return key % 997
  }

  remove(key: number): void {
    const index = this.hash(key)
    this.store[index] = this.store[index] || []
    const array = this.store[index]
    const keyIndex = array.findIndex((k) => k === key)
    if (keyIndex >= 0) {
      array.splice(keyIndex, 1)
    }
  }

  contains(key: number): boolean {
    const index = this.hash(key)
    this.store[index] = this.store[index] || []
    return this.store[index].includes(key)
  }
}
