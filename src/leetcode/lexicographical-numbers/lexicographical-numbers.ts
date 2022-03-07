/**
 * 字典序的实质是数字的树的先序遍历结果。
 * 第一层是 1，从第二层开始，每个节点都有 0 - 9，总共十个节点。
 */
function lexicalOrder(n: number): number[] {
  const result = []
  let num = 1
  while (result.length < n) {
    // 首先深入左侧节点，直到节点对应的数字超出了n的范围。
    while (num <= n) {
      result.push(num)
      num *= 10
    }
    // 如果遍历到了同层节点中最后一个节点，或者超出了范围，则返回上一层。
    // 为什么这里是 while 而不是 if ？
    // 比如 1 - 19 - 190，n 是 50，由于190 > 50，所以需要返回上一层。
    // 当返回到 19 后，由于已经遍历到了同层的最后一个节点，需要再次返回上层。
    // 而如果是 if，这时候就会出错。
    while (num % 10 === 9 || num > n) {
      num = Math.floor(num / 10)
    }
    num += 1
  }
  return result
}
