// https://leetcode-cn.com/problems/number-of-islands/
const WATER = '0'
const LAND = '1'
export function numIslands(grid: string[][]): number {
  function dfs(x: number, y: number) {
    grid[y][x] = WATER
    if (grid?.[y - 1]?.[x] !== undefined && grid?.[y - 1]?.[x] === LAND) {
      dfs(x, y - 1)
    }
    if (grid?.[y]?.[x + 1] !== undefined && grid?.[y]?.[x + 1] === LAND) {
      dfs(x + 1, y)
    }
    if (grid?.[y + 1]?.[x] !== undefined && grid?.[y + 1]?.[x] === LAND) {
      dfs(x, y + 1)
    }
    if (grid?.[y]?.[x - 1] !== undefined && grid?.[y]?.[x - 1] === LAND) {
      dfs(x - 1, y)
    }
  }
  let total = 0

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const cell = grid[y][x]
      if (cell === WATER) {
        continue
      } else {
        total++
        dfs(x, y)
      }
    }
  }

  return total
};
