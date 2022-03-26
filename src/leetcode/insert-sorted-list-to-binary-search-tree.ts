/*
 * @lc app=leetcode.cn id=109 lang=typescript
 *
 * [109] 有序链表转换二叉搜索树
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class TreeNode {
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
/**
 * 下面被注释的解法，提到了将链表转换为一个数组后，再构造二叉平衡树的做法。
 * 这样的好处是，可以使用任意遍历顺序来构造平衡树(比如注释解法中使用了先序遍历)。
 * 但如果使用的是中序遍历，那么读取数值的顺序就是链表的顺序。
 * 那么就免去了转换数组的过程，只需要按顺序读取链表的值。
 * 这么做可以省去 O(n) 的空间复杂度。
 * 时间复杂度: O(n)
 * 空间复杂度: O(logn) 即递归所需要的空间。
 */
function sortedListToBST(head: ListNode | null): TreeNode | null {
  let length = 0
  let headRef = head
  while (headRef) {
    headRef = headRef.next
    length++
  }
  function dfs(left: number, right: number) {
    if (left > right) {
      return null
    }
    const mid = (right + left) >> 1
    const node = new TreeNode(0)
    node.left = dfs(left, mid - 1)
    node.val = head.val
    head = head.next
    node.right = dfs(mid + 1, right)
    return node
  }
  const root = dfs(0, length - 1)
  return root
}

// 将链表转换为一个数组，然后根据数组构造平衡二叉树。
// 空间复杂度 n + logn (数组空间和递归空间)
// 时间复杂度 n
// function sortedListToBST(head: ListNode | null): TreeNode | null {
//   const list: number[] = []
//   // n 
//   while (head) {
//     list.push(head.val)
//     head = head.next
//   }
//   // -10, -3, 0, 5, 9
//   function dfs(left: number, right: number) {
//     if (left > right) {
//       return null
//     }
//     const mid = (right + left) >> 1
//     const node = new TreeNode(list[mid])
//     node.left = dfs(left, mid - 1)
//     node.right = dfs(mid + 1, right)
//     return node
//   }
//   const root = dfs(0, list.length - 1)
//   return root
// }
// @lc code=end

describe('insert-sorted-list-to-binary-search-tree', () => {
  test('1', () => {
    const head = new ListNode(
      -10,
      new ListNode(-3, new ListNode(0, new ListNode(5, new ListNode(9))))
    )
    expect(sortedListToBST(head)).toStrictEqual(
      new TreeNode(
        0,
        new TreeNode(-10, null, new TreeNode(-3)),
        new TreeNode(5, null, new TreeNode(9))
      )
    )
  })
})
