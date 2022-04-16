/*
 * @lc app=leetcode.cn id=692 lang=typescript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * 解法一：
 * 统计所有单词的出现次数，然后进行排序。返回排序后的前k个元素。
 * 排序的标准是：
 * 首先进行出现次数的比较，如果相同，则继续按照字母序进行比较。
 * 时间：O(n + nlogn + k) = O(nlogn)
 * 空间：O(n)
 *
 * 解法二：
 * 统计所有单词的出现次数，然后遍历该出现次数数组。
 * 维护一个最小堆，如果当前遍历的数字比堆顶大，则弹出堆顶元素，放入当前数字。
 * 遍历结束后，弹出k次堆顶，得到从小到大的数组。反转该数组就是答案。
 * 时间：O(n + nlogk + klogk + k) = O(nlogn)
 * 空间：O(n)
 */

// 解法二
function topKFrequent(words: string[], k: number): string[] {
  const wordFrequency: Record<string, number> = {}
  for (let i = 0; i < words.length; i++) {
    wordFrequency[words[i]] = wordFrequency[words[i]] || 0
    wordFrequency[words[i]]++
  }

  const heap = new Heap<WordDescriptor>(comparator)
  const descriptors = Object.keys(wordFrequency).map((word) => {
    const frequency = wordFrequency[word]
    return {
      content: word,
      frequency,
    }
  })

  for (let i = 0; i < descriptors.length; i++) {
    const descriptor = descriptors[i]
    if (heap.size < k) {
      heap.insert(descriptor)
    } else {
      const top = heap.top()
      if (comparator(top, descriptor) > 0) {
        heap.extract()
        heap.insert(descriptor)
      }
    }
  }

  const size = heap.size
  const result = new Array(size)
  for (let i = 0; i < size; i++) {
    result[result.length - i - 1] = heap.extract().content
  }
  return result
}

interface Comparator<T> {
  (a: T, b: T): number
}

class Heap<Element> {
  elements: Array<Element> = []

  // comparator, if the first element is bigger than the second
  constructor(private comparator: Comparator<Element>) {}

  get size() {
    return this.elements.length
  }

  /**
   *    0
   *  1   2
   * 3 4 5 6
   * 左子节点：2n + 1
   * 右子节点：2n + 2
   * 父节点：(n - 1) >> 1
   */
  siftUp(index: number) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1
      if (
        this.comparator(this.elements[index], this.elements[parentIndex]) > 0
      ) {
        this.swap(parentIndex, index)
        index = parentIndex
      } else {
        break
      }
    }
  }

  siftDown(index: number) {
    while (
      // 索引还在数组范围内，且有左子节点。
      index < this.elements.length &&
      this.elements[2 * index + 1] !== undefined
    ) {
      const leftIndex = 2 * index + 1
      const rightIndex = 2 * index + 2
      let swapIndex = index
      if (
        this.elements[leftIndex] !== undefined &&
        this.comparator(this.elements[leftIndex], this.elements[swapIndex]) > 0
      ) {
        swapIndex = leftIndex
      }
      if (
        this.elements[rightIndex] !== undefined &&
        this.comparator(this.elements[rightIndex], this.elements[swapIndex]) > 0
      ) {
        swapIndex = rightIndex
      }
      if (swapIndex === index) {
        break
      } else {
        this.swap(swapIndex, index)
        index = swapIndex
      }
    }
  }

  extract(): Element {
    this.swap(0, this.elements.length - 1)
    const tail = this.elements.pop()
    this.siftDown(0)
    return tail
  }

  swap(a: number, b: number) {
    ;[this.elements[a], this.elements[b]] = [this.elements[b], this.elements[a]]
  }

  insert(element: Element) {
    this.elements.push(element)
    this.siftUp(this.elements.length - 1)
  }

  top(): Element {
    return this.elements[0]
  }
}

interface WordDescriptor {
  content: string
  frequency: number
}

const comparator: Comparator<WordDescriptor> = (a, b) => {
  // if (a.frequency === b.frequency) {
  //   if (a.content > b.content) {
  //     return -1
  //   } else if (a.content < b.content) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // } else {
  //   return a.frequency - b.frequency
  // }
  if (a.frequency === b.frequency) {
    if (a.content > b.content) {
      return 1
    } else if (a.content < b.content) {
      return -1
    } else {
      return 0
    }
  } else {
    return b.frequency - a.frequency
  }
}

//  解法一
// function topKFrequent(words: string[], k: number): string[] {
//   const wordFrequency: Record<string, number> = {}
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i]
//     wordFrequency[word] = wordFrequency[word] || 0
//     wordFrequency[word]++
//   }

//   const frequencyArray = Object.keys(wordFrequency).map((word) => {
//     const frequency = wordFrequency[word]
//     return {
//       content: word,
//       frequency,
//     }
//   })

//   return frequencyArray
//     .sort(comparator)
//     .slice(0, k)
//     .map((descriptor) => {
//       return descriptor.content
//     })
// }

// function comparator(a: WordDescriptor, b: WordDescriptor) {
//   if (a.frequency !== b.frequency) {
//     return b.frequency - a.frequency
//   } else {
//     const wordA = a.content
//     const wordB = b.content
//     if (wordA > wordB) {
//       return 1
//     } else if (wordB > wordA) {
//       return -1
//     } else {
//       return 0
//     }
//   }
// }

// interface WordDescriptor {
//   content: string
//   frequency: number
// }
// @lc code=end

console.log(topKFrequent(['leetcode', 'leetcode', 'i', 'a', 'a'], 1))
console.log(topKFrequent(['leetcode', 'leetcode', 'i', 'a', 'a'], 2))
console.log(topKFrequent(['leetcode', 'leetcode', 'i', 'a', 'a'], 3))

// ["the","is","sunny","day"]
console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4
  )
)

export const x = ''
