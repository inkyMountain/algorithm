/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * 1[a2[b3[c]4[d]]]
 * abcccddddbcccdddd
 * digits:
 * letters:  abcccddddbcccdddd
 * brackets:
 *
 * 1[a2[b]]
 * (\d+)|([a-z]+)|(\[)|(\])
 * digits:   1
 * letters:  abb
 * brackets: [
 *
 * 解决方法是通过遍历，使用三个栈来保存遍历过程中遇到的元素。
 * 它们分别是 digits(存储数字) letters(存储字母) brackets(存储括号)
 * 当遇到数字时就推入 digits 数组，遇到字母就推入 letters 数组。
 * 当遇到左括号，推入 brackets 数组。
 * 但如果是右括号，则从 digits 和 letters 各弹出一个元素(记数字为 num，字母为 letter)，
 * 将 letter 重复 num 遍，再与 letters 栈顶元素相加，然后继续遍历，直到遍历完成。
 * 此时返回 letters[0] 就是答案。
 *
 * 将字符串分解成数组的正则：
 * '11[a2[b]]'.split(/(\d+)|([a-z]+)|(\[)|(\])/).filter(Boolean)
 */
function decodeString(s: string): string {
  // s = `[${s}]`
  // const digits: string[] = [],
  //   letters: string[] = [],
  //   brackets: string[] = []
  // const tokens = s.split(/(\d+)|([a-z]+)|(\[)|(\])/).filter(Boolean)
  // const length = tokens.length
  // for (let i = 0; i < length; i++) {
  //   const current = tokens[i]
  //   if (isNumber(current)) {
  //     digits.push(current)
  //   } else if (isLetter(current)) {
  //     if (isLetter(tokens[i - 1])) {
  //       letters[i - 1] += current
  //     } else {
  //       letters.push(current)
  //     }
  //   } else if (current === '[') {
  //     brackets.push(current)
  //   }
  //   // ]
  //   else {
  //     const letter = letters.pop() || ''
  //     let multiple = letter
  //     const digit = digits.pop() || 1
  //     brackets.pop()
  //     for (let j = 1; j < +digit; j++) {
  //       multiple += letter
  //     }
  //     const tail = letters.pop() || ''
  //     letters.push(tail + multiple)
  //   }
  // }
  // return letters[0]
  s = `[${s}]`
  const tokens = s.split(/(\d+)|([a-z]+)|(\[)|(\])/).filter(Boolean)
  const stack: string[] = []
  for (let i = 0; i < tokens.length; i++) {
    
  }
}

function isNumber(target: any) {
  return /^\d+$/.test(target)
}
function isLetter(target: any) {
  return /^[a-z]+$/.test(target)
}

// @lc code=end

describe('decode string', () => {
  test('1', () => {
    expect(decodeString('1[a2[b]]')).toStrictEqual('abb')
    expect(decodeString('1[a2[b3[c]4[d]]]')).toStrictEqual('abcccddddbcccdddd')
    expect(decodeString('2[abc]3[cd]ef')).toStrictEqual('abcabccdcdcdef')
    expect(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef')).toStrictEqual(
      'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef'
    )
    // zzz2[yypqjkjkefjkjkefjkjkefjkjkef]ef
  })
})
