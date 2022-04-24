/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * 遍历 isConnected 数组，建立一个 hash 对象，记录某个市是否和另外一个市直接相连。
 * 然后建立一个 Set，记录已经访问过的市。
 * 遍历所有的市，并进行dfs染色。每次dfs开始的时候，都创建一个新的颜色。
 * 最后统计一共创建了多少个颜色，就是省份的数量。
 */
function findCircleNum(isConnected: number[][]): number {
  const connectionHash: Record<number, Array<number>> = {}
  const length = isConnected.length
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      const isDirectConnected = isConnected[row][col] === 1
      if (isDirectConnected && row !== col) {
        connectionHash[row] = connectionHash[row] || []
        connectionHash[row].push(col)
      }
    }
  }

  let colorAmount = 0
  const dyeResult = new Array(length).fill(null)

  function dye(num: number, isTheStart: boolean) {
    if (isTheStart) {
      colorAmount++
    }
    if (dyeResult[num] !== null) {
      return
    }
    dyeResult[num] = colorAmount
    const connected = connectionHash[num] || []
    for (let i = 0; i < connected.length; i++) {
      dye(connected[i], false)
    }
  }

  for (let i = 0; i < length; i++) {
    if (dyeResult[i] === null) {
      dye(i, true)
    }
  }

  return colorAmount
}
// @lc code=end

// should be 2
console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
)
