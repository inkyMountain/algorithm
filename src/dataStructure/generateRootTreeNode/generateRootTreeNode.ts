import TreeNode from '../TreeNode'

export function generateRootTreeNode(nums: Array<number> | null) {
  if (!nums || nums.length === 0) {
    return null
  }
  const generateTreeNode = (index: number): TreeNode | null => {
    const leftIndex = index * 2 + 1
    const rightIndex = index * 2 + 2

    const left = nums[leftIndex]
    const right = nums[rightIndex]
    return new TreeNode(
      nums[index],
      left === null || leftIndex >= nums.length
        ? null
        : generateTreeNode(index * 2 + 1),
      right === null || rightIndex >= nums.length
        ? null
        : generateTreeNode(index * 2 + 2)
    )
  }

  const root = generateTreeNode(0)
  return root || null
}
