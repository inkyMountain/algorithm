import {zigzagLevelOrder} from './zigzagTravesal'
import TreeNode from '../../dataStructure/TreeNode'

describe('zigzagLevelOrder', () => {
  it('zigzagLevelOrder0', () => {
    expect(
      zigzagLevelOrder(
        new TreeNode(
          3,
          new TreeNode(9),
          new TreeNode(20, new TreeNode(15), new TreeNode(7))
        )
      )
    ).toStrictEqual([[3], [20, 9], [15, 7]])
  })

  it('zigzagLevelOrder1', () => {
    expect(zigzagLevelOrder(new TreeNode(1))).toStrictEqual([[1]])
  })

  it('zigzagLevelOrder2', () => {
    expect(zigzagLevelOrder(null)).toStrictEqual([])
  })
})
