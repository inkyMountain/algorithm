import {ListNode} from '../public'
import {addTwoNumbers} from './addTwoNumbers'

describe('addTwoNumbers', () => {
  it('addTwoNumbers0', () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))
      )
    ).toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))))
  })
  it('addTwoNumbers1', () => {
    expect(
      addTwoNumbers(
        new ListNode(9, new ListNode(9, new ListNode(9))),
        new ListNode(9, new ListNode(9, new ListNode(9))),
      )
    ).toStrictEqual(new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(1)))))
  })
})
