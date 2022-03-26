// https://leetcode-cn.com/problems/number-of-distinct-islands/

function numDistinctIslands(grid: number[][]): number {
  /**
   * 使用一个 m * n 的矩形(visited)存储到过的格子，然后开始遍历 grid。
   * 如果 grid[row][col] === 0 或者 visited[row][col] 为 true，
   * 就继续访问下一个格子。如果 grid[row][col] === 1，那么开始深度搜索，
   * 遍历小岛上每一个格子，并将这些格子存储在一个set中。这些set放在一个数组里。
   * 在遍历结束后，将set数组中的小岛一一进行比较，排除形状相同的set，
   * 剩余的个数就是形状不同的小岛个数。
   */

  const islands = new Set<number[][]>()
  const visited = new Array(grid.length).fill(0).map(() => {
    return new Array(grid[0].length).fill(false)
  })

  let offsetRow, offsetCol

  function dfs(row: number, col: number, cells: number[][] = []) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === 0 ||
      visited[row][col] === true
    ) {
      return
    }
    cells.push([row - offsetRow, col - offsetCol])
    visited[row][col] = true
    dfs(row + 1, col, cells)
    dfs(row - 1, col, cells)
    dfs(row, col + 1, cells)
    dfs(row, col - 1, cells)
    return cells
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (visited[row][col] === true || grid[row][col] === 0) {
        continue
      }
      ;(offsetRow = row), (offsetCol = col)
      islands.add(dfs(row, col))
    }
  }

  let result = 0

  // 开始比较每个小岛的形状
  for (let island of islands) {
    islands.delete(island)
    for (let other of islands) {
      // const isSimilar = island.every(([r1, c1]) => {
      //   const index = other.findIndex(([r2, c2]) => {
      //     return r2 === r1 && c1 === c2
      //   })
      //   return index !== -1
      // })
      // if (isSimilar && island.length === other.length) {
      //   islands.delete(other)
      // }
      const isSimilar =
        other.length === island.length &&
        island.every(([r1, c1], index) => {
          const [r2, c2] = other[index]
          return r1 === r2 && c1 === c2
        })
      if (isSimilar) {
        islands.delete(other)
      }
    }
    result++
  }
  return result
}

describe('number-of-distinct-islands', () => {
  test('1', () => {
    expect(numDistinctIslands([[0, 1]])).toStrictEqual(1)
    expect(
      numDistinctIslands([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
      ])
    ).toStrictEqual(1)
    expect(
      numDistinctIslands([
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
      ])
    ).toStrictEqual(3)
  })
})
