import TreeNode from '../dataStructure/TreeNode'
/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * 直接在 bst 上找到错误的值，不将 bst 转化为数组。
 * 遍历 bst 三次，
 * 1. 找到被交换的数字的index
 * 2. 找到index对应的值
 * 3. 交换这两个值
 */
function recoverTree(root: TreeNode | null): void {
  let first: number,
    second: number,
    firstValue: number,
    valueAfterFirst: number,
    secondValue: number,
    previous: number,
    index = 0
  dfs(root, (node) => {
    if (previous >= node.val) {
      if (first === undefined) {
        first = index - 1
      } else if (second === undefined) {
        second = index
      }
    }
    previous = node.val
    index++
  })

  index = 0
  second = second ?? first + 1

  dfs(root, (node) => {
    if (index === first) {
      firstValue = node.val
    }
    if (index === second) {
      secondValue = node.val
    }
    index++
  })

  index = 0
  dfs(root, (node) => {
    if (index === first) {
      node.val = secondValue
    }
    if (index === second) {
      node.val = firstValue
    }
    index++
  })
}

function dfs(node: TreeNode | null, handler: (node: TreeNode) => void) {
  if (node === null) {
    return
  }
  dfs(node.left, handler)
  handler(node)
  dfs(node.right, handler)
}

// First solution: Transform bst to an array. Find the exchanged values via array.
// Restore values in array and sync to bst.
// function recoverTree(root: TreeNode | null): void {
//   const nums: number[] = []
//   dfs(root, (node) => {
//     nums.push(node.val)
//   })

//   // Index of possibly exchanged nodes
//   let first: number, second: number
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] >= nums[i + 1]) {
//       if (first === undefined) {
//         first = i
//       } else if (second === undefined) {
//         second = i + 1
//       }
//     }
//   }

//   /**
//    * There exists two possibility:
//    * 1. First & second are both filled. Just exchange their values.
//    * 2. Second is undefined. In this case, the exchanged nodes are siblings.
//    */
//   if (first !== undefined && second !== undefined) {
//     ;[nums[first], nums[second]] = [nums[second], nums[first]]
//   } else if (second === undefined) {
//     ;[nums[first], nums[first + 1]] = [nums[first + 1], nums[first]]
//   }

//   // Iterates the bst again to sync values in nums and root.
//   let index = 0
//   dfs(root, (node) => {
//     node.val = nums[index]
//     index++
//   })
// }

// function dfs(node: TreeNode | null, handler: (node: TreeNode) => void) {
//   if (node === null) {
//     return
//   }
//   dfs(node.left, handler)
//   handler(node)
//   dfs(node.right, handler)
// }
// @lc code=end

describe('recover-binary-search-tree', () => {
  test('1', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
    recoverTree(root)
    expect(root).toStrictEqual(
      new TreeNode(2, new TreeNode(1), new TreeNode(3))
    )
  })
})
