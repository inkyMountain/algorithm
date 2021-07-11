// https://leetcode-cn.com/problems/sudoku-solver/

export const nextCoordinate = (
  x: number,
  y: number,
  board: string[][]
): {x: number; y: number} => {
  if (x === 8) {
    x = 0
    y = y + 1
  } else {
    x = x + 1
  }

  if (board[y] === undefined || board[y][x] === '.') {
    return {x, y}
  } else {
    return nextCoordinate(x, y, board)
  }
}

export function solveSudoku(board: string[][]): void {
  const isValid = (num: number, x: number, y: number) => {
    const used0 = new Array(9).fill(false)
    for (let i = 0; i < 9; i++) {
      if (board[i][x] === '.') {
        continue
      }
      const current = parseInt(board[i][x])
      if (used0[current - 1]) {
        return false
      } else {
        used0[current - 1] = true
      }
    }

    const used1 = new Array(9).fill(false)
    for (let i = 0; i < 9; i++) {
      if (board[y][i] === '.') {
        continue
      }
      const current = parseInt(board[y][i])
      if (used1[current - 1]) {
        return false
      } else {
        used1[current - 1] = true
      }
    }

    const used2 = new Array(9).fill(false)
    const startX = parseInt((x / 3).toString()) * 3
    const startY = parseInt((y / 3).toString()) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startY + j][startX + i] === '.') {
          continue
        }
        const current = parseInt(board[startY + j][startX + i])
        if (used2[current - 1]) {
          return false
        } else {
          used2[current - 1] = true
        }
      }
    }
    return true
  }
  const recurse = (x: number, y: number) => {
    if (y === 9) {
      return true
    }
    for (let i = 1; i <= 9; i++) {
      const original = board[y][x]
      board[y][x] = i.toString()
      const isCurrentNumberValid = isValid(i, x, y)
      if (isCurrentNumberValid) {
        const next = nextCoordinate(x, y, board)
        if (recurse(next.x, next.y)) {
          return true
        } else {
          board[y][x] = original
        }
      } else {
        board[y][x] = original
      }
    }
  }
  const next = nextCoordinate(-1, 0, board)
  recurse(next.x, next.y)
}
