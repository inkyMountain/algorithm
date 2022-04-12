/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * 1[a2[b3[c]4[d]]]
 * 1[abcccddddbcccdddd]
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
  const digits: number[] = [],
    letters: string[] = [],
    brackets: string[] = []
  
}
// @lc code=end
