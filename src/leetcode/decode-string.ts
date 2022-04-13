/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * 首先需要将字符串分解成 token。这是因为里面的数字和字母可以是复数个。
 * 比如 1[abc2[a]] 中的 abc，如果不将 abc 提取为单独的 token，
 * 处理会比较麻烦。这里可以采用正则，str.split(/()/)，
 * 里面的括号表示不要舍弃正则命中的值。
 * 之后遍历tokens，push 进 stack 数组。如果遇到 ]，则开始解码。
 * 如果是字母，持续与栈顶合并，直到栈顶不是字母。
 */
function decodeString(s: string): string {
  s = `[${s}]`
  const tokens = s.split(/(\d+)|([a-z]+)|(\[)|(\])/).filter(Boolean)
  const stack: string[] = []
  // [3[z]2[2[y]pq4[2[jk]e1[f]]]ef]
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (isLetter(token)) {
      pushLetter(stack, token)
    } else if (token === ']') {
      const top = stack.pop()
      // pop the [
      stack.pop()
      const digit = parseInt(stack.pop()) || 1
      let multiple = ''
      for (let i = 0; i < digit; i++) {
        multiple += top
      }
      pushLetter(stack, multiple)
    } else {
      stack.push(token)
    }
  }
  return stack[0]
}

function pushLetter(stack: string[], target: string) {
  while (stack.length > 0 && isLetter(stack[stack.length - 1])) {
    const top = stack.pop()
    target = top + target
  }
  stack.push(target)
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
  })
})
