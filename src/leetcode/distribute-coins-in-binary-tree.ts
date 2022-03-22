/*
 * @lc app=leetcode.cn id=979 lang=typescript
 *
 * [979] 在二叉树中分配硬币
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
/**
 * Definition for a binary tree node.
 */
/**
 * 对于一个子节点，
 * 如果 node.val 为 0，就向父节点返回一个 -1，代表它缺少一个金币。
 * 如果 node.val 为 n (n >= 2)，就向父节点返回一个 n - 1 个 1，
 * 代表它多出了 n - 1 个金币。
 * 父节点获取左右两个子节点的信息后，就将富余节点的金币，移动到缺少金币的子节点。
 * 在移动过程中，累加所有移动的距离。
 */
// function distributeCoins(root: TreeNode | null): number {
//   let step = 0
//   function traverse(node: TreeNode | null) {
//     if (node === null) {
//       return []
//     }
//     const left = traverse(node.left)
//     const right = traverse(node.right)
//     const full = [],
//       lack = [],
//       current = []
//     if (right[0] > 0) {
//       full.push(...right)
//     } else {
//       lack.push(...right)
//     }
//     if (left[0] > 0) {
//       full.push(...left)
//     } else {
//       lack.push(...left)
//     }
//     if (node.val === 0) {
//       lack.push(0)
//     } else if (node.val >= 2) {
//       for (let i = 0; i < node.val - 1; i++) {
//         full.push(0)
//       }
//     }
//     if (lack.length !== 0 && full.length !== 0) {
//       const minLength = Math.min(lack.length, full.length)
//       for (let i = 0; i < minLength; i++) {
//         step += Math.abs(lack.pop()) + Math.abs(full.pop())
//       }
//     }

//     for (let i = 0; i < lack.length; i++) {
//       current.push(lack[i] - 1)
//     }
//     for (let i = 0; i < full.length; i++) {
//       current.push(full[i] + 1)
//     }
//     return current
//   }
//   traverse(root)
//   return step
// }

function distributeCoins(root: TreeNode | null): number {
  let result = 0
  function traverse(node: TreeNode | null) {
    if (node === null) {
      return 0
    }
    const left = traverse(node.left)
    const right = traverse(node.right)
    // 如果左子树过载量是-2，意味着有两个金币需要从当前节点到子节点移动一次。
    // 如果右子树过载量是2，意味着有两个金币需要从子节点到当前节点移动一次。
    // 那么从子树到当前节点的所有需要移动次数的总和，就是它们的绝对值和。
    result += Math.abs(left) + Math.abs(right)
    // 这个公式计算的是当前节点的过载量，比如它和子树的总数为2，但是金币总数是4，那么过载量就是2。
    return node.val + left + right - 1
  }
  traverse(root)
  return result
}

// @lc code=end

describe('distribute-coins-in-binary-tree', () => {
  test('distributeCoins', () => {
    expect(
      distributeCoins(new TreeNode(3, new TreeNode(0), new TreeNode(0)))
    ).toStrictEqual(2)
  })
  test('distributeCoins2', () => {
    expect(
      distributeCoins(new TreeNode(0, new TreeNode(3), new TreeNode(0)))
    ).toStrictEqual(3)
  })
  test('distributeCoins3', () => {
    expect(
      distributeCoins(
        new TreeNode(
          4,
          new TreeNode(0, null, new TreeNode(0, null, new TreeNode(0))),
          null
        )
      )
    ).toStrictEqual(6)
    // [4,0,null,null,0,null,0]
  })
})
