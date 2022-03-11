export function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9)
    .fill(false)
    .map(() => new Array<boolean>(9).fill(false))
  const cols = new Array(9)
    .fill(false)
    .map(() => new Array<boolean>(9).fill(false))
  const squares: boolean[][][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ]

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = board[row][col]
      if (num === '.') {
        continue
      }
      if (rows[row][num]) {
        return false
      } else {
        rows[row][num] = true
      }
      if (cols[col][num]) {
        return false
      } else {
        cols[col][num] = true
      }
      if (squares[Math.floor(row / 3)][Math.floor(col / 3)][num]) {
        return false
      } else {
        squares[Math.floor(row / 3)][Math.floor(col / 3)][num] = true
      }
    }
  }
  return true
}
