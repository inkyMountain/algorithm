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
  function helper(node: TreeNode | null, parent: TreeNode | null) {}

  helper(root, null)
}

function dfs(node: TreeNode | null, callback: (node: TreeNode) => void) {}
// @lc code=end
