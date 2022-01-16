// https://leetcode-cn.com/problems/open-the-lock/

export function openLock(deadends: string[], target: string): number {
  const seen = new Set()
  const deadendsSet = new Set(deadends)
  let step = 0
  // process queue, used for bfs.
  const queue = ['0000']

  while (queue.length > 0) {
    const queueLength = queue.length
    for (let i = 0; i < queueLength; i++) {
      const current = queue.shift()
      if (current === target) {
        return step
      }
      if (deadendsSet.has(current) || seen.has(current)) {
        continue
      }
      seen.add(current)
      queue.push(...siblingsOf(current))
    }
    step++
  }

  return -1
}

function turnUp(num: number | string) {
  if (typeof num === 'string') {
    num = parseInt(num)
  }
  if (num === 9) {
    return 0
  }
  return (num + 1).toString()
}

function turnDown(num: number | string) {
  if (typeof num === 'string') {
    num = parseInt(num)
  }
  if (num === 0) {
    return 9
  }
  return (num - 1).toString()
}

function siblingsOf(composition: string) {
  const digits = [...composition].map((s) => parseInt(s))
  const nextCompositions = []
  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i]
    const prefix = digits.slice(0, i).join('')
    const suffix = digits.slice(i + 1).join('')
    const upperDigit = turnUp(currentDigit)
    const lowerDigit = turnDown(currentDigit)
    nextCompositions.push(`${prefix}${upperDigit}${suffix}`)
    nextCompositions.push(`${prefix}${lowerDigit}${suffix}`)
  }
  return nextCompositions
}
