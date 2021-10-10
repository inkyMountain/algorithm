// https://leetcode-cn.com/problems/next-greater-element-i/

export function nextGreaterElement(
  nums1: number[],
  nums2: number[]
): number[] {
  const nextMap = {}
  const stack = []
  for (let i = 0; i < nums2.length; i++) {
    const next = nums2[i]
    while (stack[stack.length - 1] < next) {
      const top = stack.pop()
      nextMap[top] = next
    }
    stack.push(next)
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = nextMap[nums1[i]] || -1
  }

  return nums1
}
