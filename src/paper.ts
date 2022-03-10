/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
  const set = new Set()
  let isValid = true

  function check(
    [row1, col1]: [number, number],
    [row2, col2]: [number, number]
  ) {
    set.clear()
    for (let row = row1; row <= row2; row++) {
      set.clear()
      for (let col = col1; col <= col2; col++) {
        const num = board[row][col]
        if (num === '.') {
          continue
        }
        if (set.has(num)) {
          isValid = false
          return
        }
        set.add(num)
      }
    }
  }
  check([0, 0], [board.length - 1, board[0].length - 1])
  // horizontal
  for (let i = 0; i < board.length; i++) {
    check([i, 0], [i, board[0].length - 1])
  }
  // vertical
  for (let i = 0; i < board[0].length; i++) {
    check([0, i], [board.length - 1, i])
  }
  ;[
    range1,
    range2,
    range3,
    range4,
    range5,
    range6,
    range7,
    range8,
    range9,
  ].forEach(([range1, range2]) => {
    check(range1, range2)
  })
  return isValid
}

const range1: [[number, number], [number, number]] = [
  [0, 0],
  [2, 2],
]
const range2: [[number, number], [number, number]] = [
  [3, 0],
  [5, 2],
]
const range3: [[number, number], [number, number]] = [
  [6, 0],
  [8, 2],
]
const range4: [[number, number], [number, number]] = [
  [0, 3],
  [2, 5],
]
const range5: [[number, number], [number, number]] = [
  [3, 3],
  [5, 5],
]
const range6: [[number, number], [number, number]] = [
  [6, 3],
  [8, 5],
]
const range7: [[number, number], [number, number]] = [
  [0, 6],
  [2, 8],
]
const range8: [[number, number], [number, number]] = [
  [3, 6],
  [5, 8],
]
const range9: [[number, number], [number, number]] = [
  [6, 6],
  [8, 8],
]

// @lc code=end
