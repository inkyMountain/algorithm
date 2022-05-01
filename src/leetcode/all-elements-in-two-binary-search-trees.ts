/*
 * @lc app=leetcode.cn id=1305 lang=typescript
 *
 * [1305] 两棵二叉搜索树中的所有元素
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
// @lc code=start
function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  const iterator1 = new InorderIterator(root1)
  const iterator2 = new InorderIterator(root2)
  const result: number[] = []
  let next1 = iterator1.next(),
    next2 = iterator2.next()
  while (next1 !== null && next2 !== null) {
    if (next1 < next2) {
      result.push(next1)
      next1 = iterator1.next()
    } else {
      result.push(next2)
      next2 = iterator2.next()
    }
  }
  const iteratorThatHasNext = next1 !== null ? iterator1 : iterator2
  let next = next1 !== null ? next1 : next2
  while (next !== null) {
    result.push(next)
    next = iteratorThatHasNext.next()
  }
  return result
}

function dfs(node: TreeNode | null, values: Array<number> = []) {
  if (node === null) {
    return values
  }
  dfs(node.left, values)
  values.push(node.val)
  dfs(node.right, values)
  return values
}

function merge(nums1: number[], nums2: number[]) {
  let index1 = 0,
    index2 = 0
  const result: number[] = []
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] < nums2[index2]) {
      result.push(nums1[index1])
      index1++
    } else {
      result.push(nums2[index2])
      index2++
    }
  }
  if (index1 < nums1.length) {
    result.push(...nums1.slice(index1))
  }
  if (index2 < nums2.length) {
    result.push(...nums2.slice(index2))
  }
  return result
}

class InorderIterator {
  constructor(root: TreeNode | null) {
    this.current = root
  }

  stack: TreeNode[] = []
  current: TreeNode | null = null

  next() {
    const stack = this.stack
    if (this.current || stack.length > 0) {
      while (this.current) {
        stack.push(this.current)
        this.current = this.current.left
      }
      this.current = stack.pop()
      const value = this.current.val
      this.current = this.current.right
      return value
    } else {
      return null
    }
  }
}

// @lc code=end

// const root = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//   new TreeNode(3)
// )
// const iterator = new InorderIterator(root)
// console.log([
//   iterator.next(),
//   iterator.next(),
//   iterator.next(),
//   iterator.next(),
//   iterator.next(),
// ])
console.log(
  getAllElements(
    new TreeNode(2, new TreeNode(1), new TreeNode(4)),
    new TreeNode(1, new TreeNode(0), new TreeNode(3))
  )
)
