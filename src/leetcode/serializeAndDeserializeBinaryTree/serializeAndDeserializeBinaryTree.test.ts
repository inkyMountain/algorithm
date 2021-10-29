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
    expect(serialize(node3)).toStrictEqual('1,2,3,x,x,4,5')
  })
  it('serialize1', () => {
    expect(serialize(node2)).toStrictEqual('1,2')
  })
})

describe('onlyDeserialize', () => {
  it('deserialize0', () => {
    const deserialized = deserialize('1,2,3,x,x,4,5')
    expect(deserialized).toStrictEqual(node3)
  })
  it('deserialize1', () => {
    const deserialized = deserialize('1,2')
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
})
