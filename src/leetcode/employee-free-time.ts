/*
 * @lc app=leetcode.cn id=759 lang=typescript
 *
 * [759] 员工空闲时间
 */

class Interval {
  start: number
  end: number
  constructor(strat: number, end: number) {
    this.start = start
    this.end = end
  }
}
// @lc code=start
function employeeFreeTime(schedule: Interval[][]): Interval[] {
  const ranges: Interval[] = []
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      ranges.push(schedule[i][j])
    }
  }
  ranges.sort((a, b) => {
    return b.start - a.start
  })
  const result: Interval[] = []
  while (ranges.length > 0) {
    const firstRange = ranges[ranges.length - 1]
    const range = new Interval(firstRange.start, firstRange.start)
    // 如果下一个出列的间隔与当前范围有交集，就继续出列并与当前范围合并。
    while (ranges.length > 0 && ranges[ranges.length - 1].start <= range.end) {
      const top = ranges.pop()
      range.start = Math.min(range.start, top.start)
      range.end = Math.max(range.end, top.end)
    }
    if (ranges.length > 0) {
      const top = ranges[ranges.length - 1]
      result.push(new Interval(range.end, top.start))
    }
  }
  return result
}
// @lc code=end
