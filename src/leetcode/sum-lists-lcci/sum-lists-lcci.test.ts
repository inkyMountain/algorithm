import {ListNode} from '../public'
import {addTwoNumbers} from './sum-lists-lcci'

describe('addTwoNumbers', () => {
  test('1', () => {
    expect(
      addTwoNumbers(new ListNode(4, new ListNode(5)), new ListNode(1))
    ).toStrictEqual(new ListNode(5, new ListNode(5)))
  })
})
