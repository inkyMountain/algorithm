/*
 * @lc app=leetcode.cn id=130 lang=typescript
 *
 * [130] 被围绕的区域
 */

/**
 * 创建一个默认值都是 false，长宽和输入矩形相同的矩形，记为 borderRegions。
 * borderRegions用于记录所有与边缘相邻的区域。
 * 遍历矩形的四条边，如果出现了O，说明这个区域与边缘相邻，
 * 在borderRegions把这个区域标记成true。
 *
 * 然后遍历矩形内部（不包括四条边的部分），如果为O，
 * 且borderRegions中对应的区块不为true，说明是目标区域。
 * 将这个区域的O全部赋值为X。
 *
 * time O(m*n)
 * space O(m*n)
 */
// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const borderRegions = new Array(board.length).fill(false).map(() => {
    return new Array(board[0].length).fill(false)
  })

  function dfs(
    row: number,
    col: number,
    callback: (row: number, col: number) => void
  ) {
    // 对当前格子进行处理
    callback(row, col)
    // 然后深度优先递归上下左右四个方向。
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    for (const [deltaRow, deltaCol] of directions) {
      const nextRow = deltaRow + row
      const nextCol = deltaCol + col
      /**
       * 找到四个方向中，还在矩形内的坐标，并且内容为O。
       */
      if (
        board[nextRow]?.[nextCol] === 'O' &&
        // 为什么要加这个判断？假设输入的 board 全都是 'O'，
        // 那么不加这句的话，就会无限递归下去，因为没有判断终止的条件。
        borderRegions[nextRow][nextCol] === false
      ) {
        dfs(nextRow, nextCol, callback)
      }
    }
  }

  function markVisited(row: number, col: number) {
    borderRegions[row][col] = true
  }

  for (let row of [0, board.length - 1]) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === 'O' && borderRegions[row][col] === false) {
        dfs(row, col, markVisited)
      }
    }
  }
  for (let col of [0, board[0].length - 1]) {
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] === 'O' && borderRegions[row][col] === false) {
        dfs(row, col, markVisited)
      }
    }
  }

  function assignCross(row: number, col: number) {
    board[row][col] = 'X'
  }
  for (let row = 1; row <= board.length - 2; row++) {
    for (let col = 1; col <= board[0].length - 2; col++) {
      if (board[row][col] === 'O' && !borderRegions[row][col]) {
        dfs(row, col, assignCross)
      }
    }
  }
}

// @lc code=end
const board1 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
]
// const board1 = [
//   ['X', 'X', 'X'],
//   ['X', 'O', 'X'],
//   ['X', 'X', 'X'],
// ]
// const board1 = [
//   ['O', 'O'],
//   ['O', 'O'],
// ]

solve(board1)
console.log(board1)
