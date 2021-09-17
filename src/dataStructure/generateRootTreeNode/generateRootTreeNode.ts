import TreeNode from '../TreeNode'

export function generateRootTreeNode(nums: Array<number>) {
  if (nums.length === 0) {
    return null
  }
  const generateTreeNode = (index: number): TreeNode | undefined => {
    const left = nums[index * 2 + 1]
    const right = nums[index * 2 + 2]
    return new TreeNode(
      nums[index],
      left === null ? null : generateTreeNode(index * 2 + 1),
      right === null ? null : generateTreeNode(index * 2 + 2),
    )
  }

  const root = generateTreeNode(0)
  return root
}
