// https://leetcode-cn.com/problems/binary-search-tree-iterator/

import TreeNode from '../../dataStructure/TreeNode'

// lazily get next value
class BSTIterator {
  constructor(root: TreeNode | null) {
    this.stack.push(root)
    this.current = root
  }

  flatten(root: TreeNode | null) {
  }

  stack: TreeNode[] = []

  current: null | TreeNode = null

  next(): number {
    if (!this.hasNext()) {
      return
    }
    
    // if this.current === null, here skip the seeking for most left node.
    while (this.current && this.current.left) {
      this.stack.push(this.current.left)
      this.current = this.current.left
    }
    this.current = this.stack.pop()
    const value = this.current.val
    if (this.current.right) {
      this.current = this.current.right
      this.stack.push(this.current)
    } else {
      this.current = null
    }
    return value
  }

  hasNext(): boolean {
    return !!this.stack.length
  }
}

/**
 * Flat the binary search tree as a normal array when constructs,
 * then use index to get next value.
 */

// Using iterator
// class BSTIterator {
//   constructor(root: TreeNode | null) {
//     this.flatten(root)
//   }

//   flattenedArray = []

//   index = -1

//   flatten(root: TreeNode | null) {
//     this.stack.push(root)
//     let current = root
//     while (this.stack.length) {
//       while (current && current.left) {
//         this.stack.push(current.left)
//         current = current.left
//       }
//       current = this.stack.pop()
//       this.flattenedArray.push(current.val)
//       if (current.right) {
//         current = current.right
//         this.stack.push(current)
//       } else {
//         current = null
//       }
//     }
//   }

//   stack = []

//   next(): number {
//     this.index++
//     return this.flattenedArray[this.index]
//   }

//   hasNext(): boolean {
//     return this.flattenedArray[this.index + 1] !== undefined
//   }
// }

// Using traversal
// export class BSTIterator {
//   constructor(root: TreeNode | null) {
//     this.flatten(root)
//   }

//   flattenedArray = []

//   index = -1

//   flatten(root: TreeNode | null) {
//     this.walk(root)
//   }

//   walk(node: TreeNode | null) {
//     if (node === null) {
//       return
//     }
//     this.walk(node.left)
//     this.flattenedArray.push(node.val)
//     this.walk(node.right)
//   }

//   next(): number {
//     this.index++
//     return this.flattenedArray[this.index]
//   }

//   hasNext(): boolean {
//     console.log(
//       this.flattenedArray,
//       this.flattenedArray[this.index + 1],
//       this.index
//     )
//     return this.flattenedArray[this.index + 1] !== undefined
//   }
// }
