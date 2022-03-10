function verifyPostorder(postorder: number[]): boolean {
  postorder.reverse()
  let index = 0
  function traverse(low: number, high: number) {
    if (low > high || index >= postorder.length) {
      return
    }
    const num = postorder[index]
    if (num < low || num > high) {
      return
    }

    index++
    traverse(num + 1, high)
    traverse(low, num - 1)
  }
  traverse(-Infinity, Infinity)
  return index === postorder.length
}
