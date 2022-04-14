/*
 * @lc app=leetcode.cn id=863 lang=typescript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 如果将 target node 作为 root，那么就可以采用 dfs，
 * 寻找所有深度为 k 的节点，就是需要的答案。
 * 但是有一个问题，root 节点可以通过 left 和 right 来访问子节点，
 * 但将 target 作为 root，无法访问到 parent 节点。
 * 因此需要一次 dfs 预处理，使用 map 存储每个节点的 parent。
 *
 * 然后开始以 target 为 root 进行遍历。
 * 有一个问题是，通常的遍历中，以 left 和 right 为下一个遍历对象。
 * 但是在这里的遍历中，
 */
function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number
): number[] {
  const result: number[] = []
  const parentMap = new Map<TreeNode, TreeNode>()
  function findParentOf(node: TreeNode | null, parent: TreeNode | null) {
    if (node === null) {
      return
    }
    if (parent !== null) {
      parentMap.set(node, parent)
    }
    findParentOf(node.left, node)
    findParentOf(node.right, node)
  }
  // 将每个节点的父节点放入map中
  findParentOf(root, null)

  /**
   *     1
   *    2 3
   *  4 5 6 7
   */

  /**
   * depth 从 -1 开始，然后 target 是 0，target 相邻的节点就是 1。
   * 这样一来，遍历到某个节点时，当前的 depth 就是该节点和之间 target 的距离。
   * 另外在深度递归的时候，需要带上 from 来标记是从哪一个节点过来的，
   * 从而避免循环往复的递归。
   */
  let depth = -1
  function dfs(node: TreeNode | null, from: TreeNode | null) {
    if (node === null) {
      return
    }
    depth++
    if (depth === k) {
      result.push(node.val)
    }
    const parent = parentMap.get(node) || null
    if (parent !== from) {
      dfs(parent, node)
    }
    if (node.left !== from) {
      dfs(node.left, node)
    }
    if (node.right !== from) {
      dfs(node.right, node)
    }
    depth--
  }
  dfs(target, null)
  return result
}
// @lc code=end
