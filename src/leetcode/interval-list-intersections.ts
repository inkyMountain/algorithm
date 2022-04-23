/*
 * @lc app=leetcode.cn id=986 lang=typescript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  const result = []
  if (firstList.length === 0 || secondList.length === 0) {
    return result
  }
  let [leftList, rightList] =
    firstList[0][0] < secondList[0][0]
      ? [firstList, secondList]
      : [secondList, firstList]
  let leftIndex = 0,
    rightIndex = 0
  while (leftIndex < leftList.length && rightIndex < rightList.length) {
    // ensure the start of the first interval of rightList
    // is smaller than the one in leftList.
    if (rightList[rightIndex][0] < leftList[leftIndex][0]) {
      ;[rightList, leftList] = [leftList, rightList]
      ;[leftIndex, rightIndex] = [rightIndex, leftIndex]
    }
    const leftCurrent = leftList[leftIndex],
      rightCurrent = rightList[rightIndex]
    if (leftCurrent[1] < rightCurrent[0]) {
      leftIndex++
    } else if (
      leftCurrent[1] >= rightCurrent[0] &&
      leftCurrent[1] <= rightCurrent[1]
    ) {
      result.push([rightCurrent[0], leftCurrent[1]])
      leftIndex++
    } else {
      result.push([rightCurrent[0], rightCurrent[1]])
      rightIndex++
    }
  }

  return result
}
// @lc code=end

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
)
