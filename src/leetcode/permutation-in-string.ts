/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * 首先统计s1中每个字母的出现次数，然后在s2中进行滑动窗口。
 * 当窗口中每个字母的出现次数 === s1 中字母的出现次数，
 * 且窗口长度与s1长度相等时，说明s2存在一个子串，是s1的某个排列。
 * 为了减小每次窗口中字母与s1字母出现次数的比较复杂度，
 * 使用一个字母相对大小对象 requires，以及一个数字变量 zeroAmount，用于对象中为0的字母个数。
 * 每当requires中某个字母的相对出现次数到达0时，zeroAmount++.
 * 反之如果一个字母的相对出现次数从0变1或-1，zeroAmount--。
 */

type LetterCount = Record<string, number>

// function checkInclusion(s1: string, s2: string): boolean {
//   const requires: LetterCount = {}
//   for (let i = 0; i < s1.length; i++) {
//     const letter = s1[i]
//     requires[letter] = requires[letter] || 0
//     requires[letter]++
//   }
//   const windowLetters: Record<string, number> = {}
//   let left = 0
//   for (let right = 0; right < s2.length; right++) {
//     const rightLetter = s2[right]
//     windowLetters[rightLetter] = windowLetters[rightLetter] || 0
//     windowLetters[rightLetter]++
//     while (left <= right && contains(windowLetters, requires)) {
//       if (right - left + 1 === s1.length) {
//         return true
//       }
//       windowLetters[s2[left]]--
//       left++
//     }
//   }
//   return false
// }

// function contains(container: LetterCount, contained: LetterCount) {
//   const letters = Object.keys(contained)
//   for (let letter of letters) {
//     if (
//       container[letter] === undefined ||
//       container[letter] < contained[letter]
//     ) {
//       return false
//     }
//   }
//   return true
// }

/**
 * time: O(m + n)
 * space: 设s1中包含了J个字母，复杂度为O(J)
 * 
 * 首先统计s1中所有字母出现的次数，但是以负数记录，绝对值为其出现的次数。
 * 那么这个对象(记为required对象)此时记录的就是，当前滑动窗口中包含的字母，相对于 s1 中字母的出现次数。
 * 同时，使用一个变量(记为nonNegtiveCount)记录required对象中，值>=0的字母个数。
 * 如果这个个数与Object.keys(required).length相同，说明所有的字母都是满足条件的。
 * 在向右延伸窗口时，如果某个字母的相对出现次数到达0，nonNegtiveCount++。
 * 在向左收缩窗口时，如果某个字母的相对出现次数到达-1，nonNegtiveCount--。
 * 这样，在向左收缩窗口时，如果nonNegtiveCount===Object.keys(required).length(说明s1是当前窗口字母的子集)，
 * 且窗口长度 === s1.length，则当前窗口就是s1的一个排列。
 * 这是因为同时满足上面两个条件后，窗口内所有字母的出现次数，和s1中所有字母的出现次数是相等的，
 * 也就是s1的一个排列。
 */
function checkInclusion(s1: string, s2: string): boolean {
  const requires: LetterCount = {}
  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i]
    requires[letter] = requires[letter] || 0
    requires[letter]--
  }
  const letterKind = Object.keys(requires).length

  let left = 0,
    nonNegtiveCount = 0
  for (let right = 0; right < s2.length; right++) {
    const rightLetter = s2[right]
    if (rightLetter in requires) {
      requires[rightLetter]++
      if (requires[rightLetter] === 0) {
        nonNegtiveCount++
      }
    }
    while (left <= right && nonNegtiveCount === letterKind) {
      if (right - left + 1 === s1.length) {
        return true
      }
      const leftLetter = s2[left]
      if (leftLetter in requires) {
        requires[leftLetter]--
        if (requires[leftLetter] === -1) {
          nonNegtiveCount--
        }
      }
      left++
    }
  }
  return false
}
// @lc code=end

// true
console.log(checkInclusion('ab', 'dbebac'))
// true
console.log(checkInclusion('abc', 'dbebac'))
// false
console.log(checkInclusion('abc', 'dbeba'))

// false
console.log(checkInclusion('ab', 'eidboaoo'))
