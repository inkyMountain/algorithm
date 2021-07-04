import {solveNQueens} from './solveNQueens'

test('solveNQueens0', () => {
  const result = solveNQueens(4)
  expect(result).toStrictEqual([
    ['.Q..', '...Q', 'Q...', '..Q.'],
    ['..Q.', 'Q...', '...Q', '.Q..'],
  ])
})
