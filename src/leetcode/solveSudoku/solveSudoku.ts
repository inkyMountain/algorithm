// https://leetcode-cn.com/problems/sudoku-solver/

export function solveSudoku(board: string[][]): void {
  const isValid = (num: number, x: number, y: number) => {
    const used0 = new Array(9).fill(false)
    for (let i = 0; i < 9; i++) {
      const current = parseInt(board[i][x])
      if (used0[current - 1]) {
        return false
      } else {
        used0[current - 1] = true
      }
    }

    const used1 = new Array(9).fill(false)
    for (let i = 0; i < 9; i++) {
      const current = parseInt(board[y][i])
      if (used1[current - 1]) {
        return false
      } else {
        used1[current - 1] = true
      }
    }

    const used2 = new Array(9).fill(false)
    for (let i = 0; i < 9; i++) {
      const current = parseInt(board[y][i])
      if (used1[current - 1]) {
        return false
      } else {
        used1[current - 1] = true
      }
    }
  }
  const nextCoordinate = (x: number, y: number): {x: number; y: number} => {
    if (x === 9) {
      x = 0
      y = y + 1
    } else {
      x = x + 1
    }
    return {x, y}
  }
  const recurse = (x: number, y: number) => {
    const needFill = board[y][x] === '.'
    if (!needFill) {
      return
    }

    for (let i = 1; i <= 9; i++) {
      const original = board[y][x]
      board[y][x] = i.toString()
      if (isValid(i, x, y)) {
        const next = nextCoordinate(x, y)
        recurse(next.x, next.y)
      } else {
        board[y][x] = original
      }
    }
  }
  recurse(0, 0)
}
