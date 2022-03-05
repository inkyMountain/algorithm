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
    if (s[end] in letterCount) {
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
