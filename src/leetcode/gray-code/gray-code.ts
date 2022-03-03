// https://leetcode-cn.com/problems/gray-code/

/**
 * 1 [0, 1]
 * 2 [00, 01, 11, 10]
 * 3 [000, 001, 011, 010,   110, 111, 101, 100]
 * 假设输入的n为5，那么总共需要循环5次。
 * 从 [00, 01, 11, 10] -> [000, 001, 011, 010,   110, 111, 101, 100]的过程中，
 * 通过位运算，将第三位的0改为1，然后倒序推入数组中。
 * 对于用于位运算的数字，开始是1，可以将二进制的第一位变成1。
 * 循环结束后，1 << 1，将 1(二进制) 变为 10(二进制)，然后继续下一次循环。
 */
export function grayCode(n: number): number[] {
  const result = [0]
  let firstBitChanger = 1
  for (let i = 0; i < n; i++) {
    const length = result.length
    for (let j = length - 1; j >= 0; j--) {
      result.push(result[j] | firstBitChanger)
    }
    firstBitChanger = firstBitChanger << 1
  }
  return result
}
