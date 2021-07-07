// https://leetcode-cn.com/problems/n-queens/

export function solveNQueens(n: number): string[][] {
  const result: string[][] = []
  const cheseboard: string[] = []

  for (let i = 0; i < n; i++) {
    let row = ''
    for (let j = 0; j < n; j++) {
      row = row + '.'
    }
    cheseboard.push(row)
  }

  const isValid = (row: number, column: number): boolean => {
    //  check right-top direction
    for (let x = column + 1, y = row - 1; x < n && y >= 0; x++, y--) {
      if (cheseboard[y]?.charAt(x) === 'Q') {
        return false
      }
    }
    //  check left-top direction
    for (let x = column - 1, y = row - 1; x >= 0 && y >= 0; x--, y--) {
      if (cheseboard[y]?.charAt(x) === 'Q') {
        return false
      }
    }
    //  check vertical direction
    for (let y = row - 1; y >= 0; y--) {
      if (cheseboard[y]?.charAt(column) === 'Q') {
        return false
      }
    }
    return true
  }

  const traverse = (row: number) => {
    if (row === n) {
      result.push([...cheseboard])
      return
    }

    for (let i = 0; i < n; i++) {
      const original = cheseboard[row]
      if (isValid(row, i)) {
        cheseboard[row] = original
          .split('')
          .map((char, index) => (index === i ? 'Q' : '.'))
          .join('')
      } else {
        continue
      }
      traverse(row + 1)
      cheseboard[row] = original
    }
  }

  traverse(0)

  return result
}
