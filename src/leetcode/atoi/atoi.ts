export function myAtoi(s: string): number {
  let index = 0
  const length = s.length
  let isNegtive = false
  const max = Math.pow(2, 31) - 1
  const minAbs = Math.pow(2, 31)
  while (index < length && s[index] === ' ') {
    index++
  }

  if (s[index] === '+') {
    index++
  } else if (s[index] === '-') {
    index++
    isNegtive = true
  }

  const numberMap = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

  const start = index
  while (s[index] in numberMap && index < length) {
    index++
  }

  const end = index

  if (end === start) {
    return 0
  }
  // 1234 1
  let cumulate = numberMap[s[start]]
  for (let i = start + 1; i < end; i++) {
    const currentNumber = numberMap[s[i]]
    const nextCumulate = cumulate * 10 + currentNumber
    if (isNegtive) {
      if (nextCumulate > minAbs) {
        cumulate = minAbs
        break
      } else {
        cumulate = nextCumulate
      }
    } else {
      if (nextCumulate > max) {
        cumulate = max
        break
      } else {
        cumulate = nextCumulate
      }
    }
  }

  return isNegtive ? -cumulate : cumulate
}
