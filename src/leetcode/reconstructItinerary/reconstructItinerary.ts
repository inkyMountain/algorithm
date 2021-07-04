// https://leetcode-cn.com/problems/reconstruct-itinerary/

export function findItinerary(tickets: string[][]): string[] {
  const result = ['JFK']
  const nearBy: {[key: string]: Array<string>} = {}
  // construct a from-to object
  tickets.forEach(([from, to]) => {
    nearBy[from] = nearBy[from] ?? []
    nearBy[from].push(to)
  })
  // sort the to array to make it alphabetical
  for (const from in nearBy) {
    nearBy[from].sort()
  }
  const recurse = () => {
    // terminate recurse when we arrive the final destination
    if (result.length === tickets.length + 1) {
      return true
    }
    const where = result[result.length - 1]
    const targets = nearBy[where]
    // if we arrive a airport without matched target,
    // terminate it as the current paths breaks the problem's rule.
    if (!targets) {
      return false
    }
    for (let i = 0; i < targets.length; i++) {
      // delete the target we're going to
      const target = targets.splice(i, 1)[0]
      result.push(target)
      // return true if a valid itinerary is found
      if (recurse()) {
        return true
      }
      // else we need a backtrack to try other itineraries
      result.pop()
      targets.splice(i, 0, target)
    }
  }

  recurse()
  return result
}
