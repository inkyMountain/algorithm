export function minWindow(s: string, t: string): string {
	let start = 0, end = -1
  const letterCount = {}
  let count = 0
  for (let i = 0; i < t.length; i++) {
    const letter = t[i]
    letterCount[letter] = letterCount[letter] || 0
    letterCount[letter]++
    count++
  }
  let minStringLength = Infinity
  let minString = ''
  while (end < s.length) {
    end++
    // 只有处理在t中出现过的字母，因为s有可能出现t中没有的字母，需要跳过。
    if (s[end] in letterCount) {
      // 只有一个字母的需求量是正数时，才减小count。因为如果一个字母的需求量，从 0 -> -1，
      // 滑动窗口中的字母并没有包含t中的所有字母。比如t为abc，窗口中还缺a，但这时却来了一个b。
      // 这种情况不应该让窗口开始收缩。
      if (letterCount[s[end]] > 0) {
        count--
      }
      letterCount[s[end]]--
    }
    while (count === 0 && start <= end) {
      if (s[start] in letterCount) {
        const strLength = end - start + 1
        if (strLength < minStringLength) {
          minString = s.substring(start, end + 1)
          minStringLength = minString.length
        }
        letterCount[s[start]]++
        // 只有 count 从 0 -> 1 ，才认为排除当前字母后，窗口内的字母，
        // 已经无法包含t中的字母了。
        // 如果是从 -2 -> -1，相当于 t 为 abc时，窗口内有两个b，这时一个b被排除后，窗口仍然包含b。
        if (letterCount[s[start]] > 0) {
          count++
        }
      }
      start++
    }
  }
  
  return minString
};


// export function minWindow(s: string, t: string): string {
// 	let start = 0, end = -1
//   const letterCount = {}
//   const windowLetterCount = {}
//   for (let i = 0; i < t.length; i++) {
//     const letter = t[i]
//     letterCount[letter] = letterCount[letter] || 0
//     letterCount[letter]++
//   }
//   let minStringLength = Infinity
//   let minString = ''
//   while (end < s.length) {
//     end++
//     if (s[end] in letterCount) {
//       windowLetterCount[s[end]] = windowLetterCount[s[end]] || 0
//       windowLetterCount[s[end]]++
//     }
//     while (check(letterCount, windowLetterCount) && start <= end) {
//       if (s[start] in letterCount) {
//         const strLength = end - start + 1
//         if (strLength < minStringLength) {
//           minString = s.substring(start, end + 1)
//           minStringLength = minString.length
//         }
//       }
//       windowLetterCount[s[start]]--
//       start++
//     }
//   }
  
//   return minString
// };

// function check(count1, count2) {
//   return Object.keys(count1).every(key => {
//     return count1[key] <= count2[key]
//   })
// }

