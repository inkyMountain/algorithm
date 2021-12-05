import {copyRandomList, Node} from './copyListWithRandomPointer'

describe('copyRandomList', () => {
  it('copyRandomList0', () => {
    const generateNodes = () => {
      return new Node(
        7,
        new Node(13, new Node(11, new Node(10, new Node(1, null, 0), 2), 4), 0),
        null
      )
    }
    expect(copyRandomList(generateNodes())).toStrictEqual(generateNodes())
  })
})
