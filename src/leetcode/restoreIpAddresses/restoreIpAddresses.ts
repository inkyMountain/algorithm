// https://leetcode-cn.com/problems/restore-ip-addresses/

// export function restoreIpAddresses(s: string): string[] {
//   const result = []
//   const fragments = []
//   const recurse = (startIndex: number) => {
//     if (startIndex === s.length && fragments.length === 4) {
//       result.push(fragments.join('.'))
//       return
//     }
//     if (startIndex > s.length) {
//       return
//     }
//     for (let i = startIndex; i < startIndex + 3 && i < 12; i++) {
//       const fragmentString = s.substring(startIndex, i + 1)
//       const fragment = parseInt(fragmentString)
//       if (
//         fragment > 255 ||
//         fragment.toString().length !== fragmentString.length
//       ) {
//         continue
//       }

//       fragments.push(fragment)
//       recurse(i + 1)
//       fragments.pop()
//     }
//   }
//   recurse(0)
//   return result
// }

/**
 * 使用 lengths 数组，代表每个ip片段的长度。
 * 使用递归枚举所有可能的ip，并对ip进行校验。
 * 使用Set存储结果来避免重复。
 */
export function restoreIpAddresses(s: string): string[] {
  const result = new Set<string>()
  const lengths = [1, 1, 1, 1]
  const fragments = ['0', '0', '0', '0']
  function check(index: number) {
    if (index >= lengths.length) {
      return
    }
    for (let j = 0; j < 3; j++) {
      lengths[index] = j + 1
      check(index + 1)
      const totalLength = lengths.reduce((cumulate, length) => {
        return cumulate + length
      }, 0)
      if (totalLength !== s.length) {
        continue
      }
      let start = 0
      lengths.forEach((length, index) => {
        fragments[index] = s.substring(start, start + length)
        start += length
      })
      const ip = fragments.join('.')
      if (fragments.every((f) => isValidFragment(f))) {
        result.add(ip)
      }
    }
  }
  check(0)
  return [...result]
}

function isValidFragment(fragment: string): boolean {
  if (fragment[0] === '0') {
    return fragment.length === 1
  }
  const num = parseInt(fragment)
  return num >= 0 && num <= 255
}
