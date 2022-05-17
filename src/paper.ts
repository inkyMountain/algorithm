/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const queue: number[] = []
  const nextCourseMap = new Map<number, Set<number>>()
  const preCourseMap = new Map<number, Set<number>>()
  for (let i = 0; i < prerequisites.length; i++) {
    const [pre, next] = prerequisites[i]
    if (!nextCourseMap.get(pre)) {
      nextCourseMap.set(pre, new Set())
    }
    nextCourseMap.get(pre).add(next)

    if (!preCourseMap.get(next)) {
      preCourseMap.set(next, new Set())
    }
    preCourseMap.get(next).add(pre)
  }

  for (let [course, set] of preCourseMap) {
    if (set.size === 0) {
      queue.push(course)
    }
  }

  let completeCourseNumber = 0

  while (queue.length > 0) {
    const head = queue.shift()
    const courses = [...nextCourseMap.get(head)]
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i]
      const set = preCourseMap.get(course)
      set.delete(course)
      if (set.size === 0) {
        queue.push(course)
      }
    }
    completeCourseNumber++
  }

  return completeCourseNumber === numCourses
}
// @lc code=end

console.log(canFinish(2, [[1, 0]]))
