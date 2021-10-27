import {generateRootTreeNode} from '../../dataStructure/generateRootTreeNode/generateRootTreeNode'
import {longestUnivaluePath} from './longestUnivaluePath'

describe('longestUnivaluePath', () => {
  it('longestUnivaluePath0', () => {
    expect(
      longestUnivaluePath(generateRootTreeNode([5, 4, 5, 1, 1, 5]))
    ).toStrictEqual(2)
  })
  it('longestUnivaluePath1', () => {
    expect(
      longestUnivaluePath(generateRootTreeNode([1, 4, 5, 4, 4, 5]))
    ).toStrictEqual(2)
  })
})
