/*
 * @lc app=leetcode.cn id=1642 lang=typescript
 *
 * [1642] 可以到达的最远建筑
 */

// @lc code=start
function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number
): number {
  /**
   * 假设 heights 数组中，一共产生了 4 个上升楼层，那么一共有 4 个代表上升高度的数字。
   * 由于梯子可以解决任意大小的上升高度，所以一定要用梯子解决 4 个数字中最大的那个。
   * 所以问题被转化为，求 4 个数字中的 top k (k 即 ladders 变量)。
   * top k 问题的经典解法是采用最小堆。
   */
  const heap = new Heap((a, b) => b > a)
  // const heap = new Heap('min')
  let sum = 0
  for (let i = 0; i < heights.length - 1; i++) {
    const delta = heights[i + 1] - heights[i]
    if (delta <= 0) {
      continue
    }

    if (heap.size < ladders) {
      heap.append(delta)
    } else {
      heap.append(delta)
      sum += heap.extract()
      if (sum > bricks) {
        return i
      }
    }
  }
  return heights.length - 1
}

class Heap {
  heap: number[] = []

  get size() {
    return this.heap.length
  }

  constructor(isGreater) {
    this.isGreater = isGreater
  }

  siftUp(index: number) {
    while ((index - 1) << 1 >= 0) {
      const parent = (index - 1) >> 1
      if (this.isGreater(this.heap[index], this.heap[parent])) {
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
  isGreater = null

  siftDown(index: number) {
    while (index >= 0 && index < this.heap.length) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      // 左右节点都有
      if (this.heap[rightIndex] !== undefined) {
        const greaterIndex = this.isGreater(
          this.heap[rightIndex],
          this.heap[leftIndex]
        )
          ? rightIndex
          : leftIndex
        if (this.isGreater(this.heap[greaterIndex], this.heap[index])) {
          this.swap(greaterIndex, index)
          index = greaterIndex
        } else {
          break
        }
      }
      // 只有左节点，没有右节点。
      else if (this.heap[leftIndex] !== undefined) {
        // 如果左节点比父节点大 (最大根情况下)
        if (this.isGreater(this.heap[leftIndex], this.heap[index])) {
          this.swap(leftIndex, index)
          index = leftIndex
        } else {
          break
        }
      }
      // 左右节点都没有
      else {
        break
      }
    }
  }

  append(num: number) {
    this.heap.push(num)
    this.siftUp(this.heap.length - 1)
  }

  extract(): number {
    const heap = this.heap
    ;[heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]]
    const tail = this.heap.pop()
    this.siftDown(0)
    return tail
  }

  top() {
    return this.heap[0]
  }

  swap(a: number, b: number) {
    ;[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }
}

// @lc code=end

describe('furthest building you can reach', () => {
  test('1', () => {
    expect(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)).toStrictEqual(4)
    expect(
      furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)
    ).toStrictEqual(7)
    expect(furthestBuilding([1, 5, 1, 2, 3, 4, 10000], 4, 1)).toStrictEqual(5)
  })
})
