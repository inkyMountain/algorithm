/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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
/**
 *    1
 *  2   3
 * 4 5 6 7
 *
 * 1: 1
 * 3: 1
 * 7: 1
 */
// @lc code=start
/**
 * 使用前缀和可以快速求出某一段范围内的数字总和。
 * 前缀和定义为：设树中有一个节点A，与root节点的路径是：root-B-C-A，
 * 那么A对应的前缀和就是 root + B + C + A。
 * 如果需要求 B C A 这一范围的和，那就是 前缀和A - 前缀和root。
 *
 * 这题可以使用 dfs 解决，在遍历到节点A时，使用一个hash对象，
 * 记录从root到A的路径的前缀和，key为前缀和的值，value是该值出现的总次数。
 * 每遍历一个节点，就将当前节点的前缀和放入hash对象中。
 * 需要注意的是，在遍历之前，需要将 {0: 1} 放入hash对象中。
 * 原因是，假设当前节点为A，那么hash对象中有root B C对应的前缀和，
 * 可以算出 B B-C B-C-A 中是否有等于 targetSum 的路径，
 * 但是没有包含 root-B-C-A 这段路径，所以将 {0: 1} 放入hash中，
 * 来解决这个问题。
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
  const prefix: Record<number, number> = {0: 1}
  let sum = 0,
    result = 0
  function dfs(node: TreeNode | null) {
    if (node === null) {
      return
    }
    sum += node.val
    const targetPathNum = prefix[sum - targetSum] || 0
    result += targetPathNum
    prefix[sum] = prefix[sum] || 0
    prefix[sum]++
    dfs(node.left)
    dfs(node.right)
    prefix[sum]--
    sum -= node.val
  }

  dfs(root)
  return result
}
// @lc code=end
