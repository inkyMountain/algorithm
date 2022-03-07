export class MedianFinder {
  smallerHeap = new Heap('max')
  biggerHeap = new Heap('min')
  length = 0

  get median() {
    const isEven = this.length % 2 === 0
    if (isEven) {
      const smallerHeapTop = this.smallerHeap.top()
      const biggerHeapTop = this.biggerHeap.top()
      if (this.smallerHeap.size > 0 && this.biggerHeap.size > 0) {
        return (smallerHeapTop + biggerHeapTop) / 2
      } else {
        return smallerHeapTop || biggerHeapTop
      }
    } else {
      return this.smallerHeap.top()
    }
  }

  addNum(num: number) {
    this.length++
    if (num >= this.median) {
      this.biggerHeap.insert(num)
      /**
       * 1代表heap中原有数据，2代表新插入的数据。
       * 下面列出插入新数据后，可能出现的四种情况。
       *
       * biggerHeap 1 2
       * smallerHeap 1
       *
       * biggerHeap 1 2
       * smallerHeap 1 1
       *
       * biggerHeap 1
       * smallerHeap 1 2
       *
       * biggerHeap 1
       * smallerHeap 1 1 2
       */
      if (this.biggerHeap.size > this.smallerHeap.size) {
        this.smallerHeap.insert(this.biggerHeap.extractTop())
      }
    } else {
      this.smallerHeap.insert(num)
      if (this.smallerHeap.size - this.biggerHeap.size === 2) {
        this.biggerHeap.insert(this.smallerHeap.extractTop())
      }
    }
  }

  findMedian(): number {
    return this.median
  }
}

class Heap {
  heap: number[] = []
  heapType: 'max' | 'min' = 'max'

  get size() {
    return this.heap.length
  }

  constructor(type?: 'max' | 'min') {
    this.heapType = type
  }

  siftUp(index: number) {
    while ((index - 1) << 1 >= 0) {
      const parent = (index - 1) >> 1
      if (this.isGreater(index, parent)) {
        ;[this.heap[parent], this.heap[index]] = [
          this.heap[index],
          this.heap[parent],
        ]
      } else {
        break
      }
      index = parent
    }
  }

  // Heap 类需要同时兼容最大堆和最小堆，使用该方法封装比较的细节。
  isGreater(index1: number, index2: number) {
    if (this.heapType === 'max') {
      return this.heap[index1] > this.heap[index2]
    } else {
      return this.heap[index2] > this.heap[index1]
    }
  }

  siftDown(index: number, end: number) {
    while ((index << 1) + 1 <= end) {
      let larger = index
      const leftSon = (index << 1) + 1
      const rightSon = (index << 1) + 2
      if (this.isGreater(leftSon, index)) {
        larger = leftSon
      }
      if (rightSon <= end && this.isGreater(rightSon, larger)) {
        larger = rightSon
      }
      ;[this.heap[larger], this.heap[index]] = [
        this.heap[index],
        this.heap[larger],
      ]
      if (index === larger) {
        break
      }
      index = larger
    }
  }

  insert(num: number) {
    this.heap.push(num)
    this.siftUp(this.heap.length - 1)
  }

  extractTop(): number {
    const heap = this.heap
    const tail = heap.length - 1
    ;[heap[0], heap[tail]] = [heap[tail], heap[0]]
    this.siftDown(0, tail - 1)
    return this.heap.pop()
  }

  top() {
    return this.heap[0]
  }
}
