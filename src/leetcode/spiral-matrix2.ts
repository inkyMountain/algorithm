/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
// [deltaRow, deltaCol] right down left up
const delta = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function generateMatrix(n: number): number[][] {
  let total = Math.pow(n, n),
    filledNum = 0;
  const matrix = new Array(n).fill(Infinity).map(() => {
    return new Array(n).fill(Infinity);
  });

  let deltaIndex = 0,
    row = 0,
    col = 0;
  while (filledNum < total) {
    filledNum++;
    matrix[row][col] = filledNum;
    let [deltaRow, deltaCol] = delta[deltaIndex];
    const next = matrix[row + deltaRow]?.[col + deltaCol];
    // next: infinity undefined number
    if (next === Infinity) {
    } else {
      deltaIndex = nextDeltaIndex(deltaIndex);
      [deltaRow, deltaCol] = delta[deltaIndex];
    }
    row = row + deltaRow;
    col = col + deltaCol;
  }
  return matrix;
}

function nextDeltaIndex(index: number) {
  if (index <= 2) {
    return index + 1;
  } else {
    return 0;
  }
}

// @lc code=end

describe("spiral-matrix2", () => {
  test("1", () => {
    expect(generateMatrix(3)).toStrictEqual([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });
});
