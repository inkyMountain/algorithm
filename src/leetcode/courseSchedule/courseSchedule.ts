// https://leetcode-cn.com/problems/course-schedule/

/**
 * Problem:
 * numCourses 是一个正整数，代表一共有几门课需要上。
 * prerequisites 是代表上课前提条件的数组，比如 [[1, 2]]，
 * 代表必须先上2再上1。
 * 写一个函数，根据给定的前提条件，判断是否能上完所有的课。
 * 
 * Solution:
 * 统计所有课程的入度和出度。使用一个栈来存储所有0入度的课程，
 * 使用 while 处理栈中的课程，上完一门课，就把它的出度对应的课程的入度-1。
 * 如果入度减为零，则将其入栈。
 */
export function canFinish(
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const indegrees = new Array(numCourses).fill(0)
  const outdegrees: {[key: number]: Array<number>} = {}
  for (let i = 0; i < prerequisites.length; i++) {
    const [depend, depent] = prerequisites[i]
    indegrees[depend]++
    outdegrees[depent] = outdegrees[depent] || []
    outdegrees[depent].push(depend)
  }

  const queue = []
  indegrees.forEach((indegree, index) => {
    if (indegree === 0) {
      queue.push(index)
    }
  })
  let count = 0
  while (queue.length) {
    const done = queue.shift()
    count++
    outdegrees[done]?.forEach((outdegree, index) => {
      indegrees[outdegrees[done][index]]--
      if (indegrees[outdegrees[done][index]] === 0) {
        queue.push(outdegrees[done][index])
      }
    })
  }
  return count === numCourses
}
