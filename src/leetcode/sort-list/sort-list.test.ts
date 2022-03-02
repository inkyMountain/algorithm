import {ListNode} from '../public'
import {sortList} from './sort-list'

describe('paper', () => {
  test('test1', () => {
    expect(
      sortList(
        new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
      )
    ).toStrictEqual(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
    )
  })

  test('test2', () => {
    expect(
      sortList(
        // [-1,0,3,4,5]
        new ListNode(
          -1,
          new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0))))
        )
      )
    ).toStrictEqual(
      new ListNode(
        -1,
        new ListNode(0, new ListNode(3, new ListNode(4, new ListNode(5))))
      )
    )
  })
})
