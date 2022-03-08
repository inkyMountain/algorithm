function movingCount(m: number, n: number, k: number): number {
  // -1 和不满足要求    0 未知     1 到达过
  const mark: Array<Array<number>> = new Array(m).fill(0).map(() => {
    return new Array(n).fill(0)
  })
  let amount = 0
  const queue = [[0, 0]]
  while (queue.length > 0) {
    const [row, col] = queue.shift()
    const sum = sumOf(row, col)
    const canCover = sum <= k
    if (mark[row][col] === 1 || mark[row][col] === -1) {
      continue
    }
    if (canCover) {
      amount++
      const nextPoints = [
        [row + 1, col],
        [row, col + 1],
      ].filter(([r, c]) => {
        return (
          r >= 0 &&
          r < m &&
          c >= 0 &&
          c < n &&
          mark[r][c] !== -1 &&
          mark[r][c] !== 1
        )
      })
      queue.push(...nextPoints)
      mark[row][col] = 1
    } else {
      mark[row][col] = -1
    }
  }

  return amount
}

function sumOf(row: number, col: number) {
  let sum = 0
  while (row > 0) {
    sum += row % 10
    row = Math.floor(row / 10)
  }
  while (col > 0) {
    sum += col % 10
    col = Math.floor(col / 10)
  }
  return sum
}
