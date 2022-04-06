/*
 * @lc app=leetcode.cn id=785 lang=typescript
 *
 * [785] 判断二分图
 */

// @lc code=start
/**
 * 根据题目中二分的定义，每个连接的两侧节点需要处于不同的集合中。
 * 那么从 graph[0] 开始，遍历它的每一个连接。
 * 由二分定义可得，连接的另一端节点必须处于对立的集合中。
 * 将当前节点标记为绿色，所有另一端节点的节点标记为红色。
 * 重复这个标记颜色的过程，直到：
 * - 遇到一个本该标记为绿色的节点，但是它之前已经被标记为红色。反之亦然。
 * - 所有的节点都已经被标记上了颜色，说明满足题意。
 */
function isBipartite(graph: number[][]): boolean {
  const red = new Set<number[]>()
  const green = new Set<number[]>()
  let result = true
  for (let i = 0; i < graph.length; i++) {
    const node = graph[i]
    if (red.has(node) || green.has(node)) {
      continue
    }
    dfs(node, red)
  }

  function dfs(node: number[], set: Set<number[]>) {
    const nextSet = set === red ? green : red
    // 如果染色了，
    if (red.has(node) || green.has(node)) {
      // - 是不同颜色，什么也不做，停止深度搜索。
      if (set.has(node)) {
      }
      // - 是相同颜色，result = false
      else {
        result = false
      }
    }
    // 如果未染色，就将其染色后继续深度搜索。
    else {
      set.add(node)
      for (let i = 0; i < node.length; i++) {
        dfs(graph[node[i]], nextSet)
      }
    }
  }
  return result
}

// @lc code=end
