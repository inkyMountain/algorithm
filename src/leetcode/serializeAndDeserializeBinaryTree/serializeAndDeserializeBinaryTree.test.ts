import {generateRootTreeNode} from '../../dataStructure/generateRootTreeNode/generateRootTreeNode'
import TreeNode from '../../dataStructure/TreeNode'
import {deserialize, serialize} from './serializeAndDeserializeBinaryTree'

const node1 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(
    3,
    new TreeNode(4, new TreeNode(6), new TreeNode(7)),
    new TreeNode(5)
  )
)

const node2 = new TreeNode(1, new TreeNode(2))

const node3 = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
)

describe('onlySerialize', () => {
  it('serialize0', () => {
    expect(serialize(node3)).toStrictEqual('123xx45')
  })
  it('serialize1', () => {
    expect(serialize(node2)).toStrictEqual('12')
  })
})

describe('onlyDeserialize', () => {
  it('deserialize0', () => {
    const deserialized = deserialize('123xx45')
    expect(deserialized).toStrictEqual(node3)
  })
  it('deserialize1', () => {
    const deserialized = deserialize('12')
    expect(deserialized).toStrictEqual(node2)
  })
})

describe('serializeAndDeserializeBinaryTree', () => {
  it('serializeAndDeserializeBinaryTree0', () => {
    expect(deserialize(serialize(node1))).toStrictEqual(node1)
  })
  it('serializeAndDeserializeBinaryTree1', () => {
    expect(deserialize(serialize(null))).toStrictEqual(null)
  })
  it('serializeAndDeserializeBinaryTree2', () => {
    expect(deserialize(serialize(node2))).toStrictEqual(node2)
  })
  it('serializeAndDeserializeBinaryTree3', () => {
    const deserialized = deserialize(serialize(node1))
    expect(deserialized).toStrictEqual(node1)
  })

  it('serializeAndDeserializeBinaryTree3', () => {
    new TreeNode(
      4,
      new TreeNode(-7),
      new TreeNode(
        -3,
        new TreeNode(
          -9,
          new TreeNode(9, null, new TreeNode(6)),
          new TreeNode(-7, null, new TreeNode(-6))
        ),
        new TreeNode(-3, new TreeNode(-4))
      )
    )
    const node = [
      4,
      -7,
      -3,
      null,
      null,
      -9,
      -3,
      9,
      -7,
      -4,
      null,
      6,
      null,
      -6,

      -6,
      null,
      null,
      0,
      6,
      5,
      null,
      9,
      null,
      null,
      -1,
      -4,
      null,
      null,
      null,
      -2,
    ]
    const deserialized = deserialize(serialize(node1))
    expect(deserialized).toStrictEqual(node1)
  })
})
