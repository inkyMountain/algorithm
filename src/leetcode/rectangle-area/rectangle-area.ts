/*
 * @lc app=leetcode.cn id=223 lang=typescript
 *
 * [223] 矩形面积
 */

export function computeArea(
  ax1: number,
  ay1: number,
  ax2: number,
  ay2: number,
  bx1: number,
  by1: number,
  bx2: number,
  by2: number
): number {
  const aArea = Math.abs(ax1 - ax2) * Math.abs(ay1 - ay2)
  const bArea = Math.abs(bx1 - bx2) * Math.abs(by1 - by2)
  const crossArea =
    Math.min(
      Math.abs(ax1 - bx2),
      Math.abs(ax2 - bx1),
      Math.abs(ax1 - ax2),
      Math.abs(bx1 - bx2)
    ) *
    Math.min(
      Math.abs(ay1 - by2),
      Math.abs(ay2 - by1),
      Math.abs(ay1 - ay2),
      Math.abs(by1 - by2)
    )
  const isXCross = (ax2 > bx1 && bx2 > ax1) || (ax2 < bx1 && bx2 < ax1)
  const isYCross = (ay2 > by1 && by2 > ay1) || (ay2 < by1 && by2 < ay1)
  return isXCross && isYCross ? aArea + bArea - crossArea : aArea + bArea
}
