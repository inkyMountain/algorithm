import {generateRootTreeNode} from '../../dataStructure/generateRootTreeNode/generateRootTreeNode'
import {maxPathSum} from './binaryTreeMaximumPathSum'

describe('maxPathSum', () => {
  it('maxPathSum0', () => {
    expect(maxPathSum(generateRootTreeNode([1, 2, 3]))).toStrictEqual(6)
  })
  it('maxPathSum1', () => {
    expect(
      maxPathSum(generateRootTreeNode([-10, 9, 20, null, null, 15, 7]))
    ).toStrictEqual(42)
  })

  it('maxPathSum2', () => {
    expect(maxPathSum(generateRootTreeNode([2, -1]))).toStrictEqual(2)
  })
})
