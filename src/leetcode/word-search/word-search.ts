export function exist(board: string[][], word: string): boolean {
  let index = 0
  let result = false
  // m for rows number, n for columns number.
  const m = board.length,
    n = board[0].length
  const taken = new Array(m).fill(false).map(() => {
    return new Array(n).fill(false)
  })
  function dfs(row: number, col: number) {
    const char = board?.[row]?.[col]
    if (
      row >= m ||
      row < 0 ||
      col >= n ||
      col < 0 ||
      word[index] !== char ||
      taken[row][col]
    ) {
      return
    }
    index++
    taken[row][col] = true
    if (index === word.length) {
      result = true
    }
    dfs(row, col + 1)
    dfs(row, col - 1)
    dfs(row + 1, col)
    dfs(row - 1, col)
    taken[row][col] = false
    index--
  }
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      dfs(row, col)
    }
  }
  return result
}
