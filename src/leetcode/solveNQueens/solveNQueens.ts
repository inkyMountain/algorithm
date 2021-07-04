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
    //  check right-top to left-bottom direction
    for (let i = 0; i < n; i++) {
      if (
        cheseboard[row + i]?.charAt(column + i) === 'Q' ||
        cheseboard[row - i]?.charAt(column - i) === 'Q'
      ) {
        return false
      }
    }
    //  check right-bottom to left-top direction
    for (let i = 0; i < n; i++) {
      if (
        cheseboard[row + i]?.charAt(column - i) === 'Q' ||
        cheseboard[row - i]?.charAt(column + i) === 'Q'
      ) {
        return false
      }
    }
    //  check vertical direction
    for (let i = 0; i < n; i++) {
      if (cheseboard[i]?.charAt(column) === 'Q') {
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
