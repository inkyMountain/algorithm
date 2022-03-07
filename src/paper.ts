class MedianFinder {
  maxHeap = new Heap('max')
  minHeap = new Heap('min')
  length = 0

  get median() {
    const isEven = this.length % 2 === 0
    if (isEven) {
      const maxHeapTop = this.maxHeap.top()
      const minHeapTop = this.minHeap.top()
      if (this.maxHeap.size > 0 && this.minHeap.size > 0) {
        return (maxHeapTop + minHeapTop) / 2
      } else {
        return maxHeapTop || minHeapTop
      }
    } else {
      return this.maxHeap.top()
    }
  }

  addNum(num: number) {
    this.length++
    if (num >= this.median) {
      this.minHeap.insert(num)
      if (this.minHeap.size > this.maxHeap.size) {
        this.maxHeap.insert(this.minHeap.extractTop())
      }
      // todo 思考这里的情况
      /**
       * minHeap 1 2
       * maxHeap 1
       * 
       * minHeap 1 2
       * maxHeap 1 1
       * 
       * minHeap 1
       * maxHeap 1 2
       * 
       * minHeap 1
       * maxHeap 1 1 2
       */
    } else {
      this.maxHeap.insert(num)
      if (this.maxHeap.size - this.minHeap.size === 2) {
        this.minHeap.insert(this.maxHeap.extractTop())
      }
    }
  }

  findMedian(): number {
    return this.median
  }
}
class Heap {
  heap: number[] = []
  type: 'max' | 'min' = 'max'

  get size() {
    return this.heap.length
  }

  constructor(type?: 'max' | 'min') {
    this.type = type
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

  isGreater(index1: number, index2: number) {
    if (this.type === 'max') {
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

const median = new MedianFinder()
median.addNum(0)
median.addNum(0)
median.findMedian()
// median.addNum(1)
// median.addNum(3)
// median.addNum(2)
// median.addNum(8)
// median.addNum(4)
// median.addNum(5)

console.log('median ==========>', median.maxHeap.heap, median.minHeap.heap)

// const maxHeap = new Heap('min')
// maxHeap.insert(1)
// maxHeap.insert(3)
// maxHeap.insert(2)
// maxHeap.insert(8)
// maxHeap.insert(4)

// console.log('maxHeap ==========>', maxHeap.heap, [
//   maxHeap.extractTop(),
//   maxHeap.extractTop(),
//   maxHeap.extractTop(),
//   maxHeap.extractTop(),
// ])
