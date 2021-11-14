// https://leetcode-cn.com/problems/course-schedule/
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
