/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// @lc code=start
/*
 方法1：遍历链表，以当前节点为起点，反转后续链表。遍历完成后，就是题目要求的顺序。
 时间复杂度是 O(n^2)，空间复杂度是 O(1)

 方法2：使用数组按顺序存储链表，使用双指针，分别指向数组的首尾，对链表进行重新排序。
 时间复杂度：O(n) 空间复杂度 O(n)

 方法3：使用快慢指针找到链表中点，然后将链表的后半部分反转。将链表前半部分和反转后的后半部分合并即可。
 */
// function reorderList(head: ListNode | null): void {
//   const nodes: ListNode[] = []
//   let headRef = head
//   while (headRef) {
//     nodes.push(headRef)
//     headRef = headRef.next
//   }
//   let left = 0,
//     right = nodes.length - 1
//   const dummyNode = new ListNode(0)
//   let current = dummyNode
//   while (left <= right) {
//     current.next = nodes[left]
//     current = current.next
//     if (nodes[right] !== nodes[left]) {
//       current.next = nodes[right]
//       current = current.next
//     }
//     left++
//     right--
//   }
//   current.next = null
// }

// 方法3
function reorderList(head: ListNode | null): void {
  let slow = head,
    fast = head
  while (fast) {
    if (fast) {
      fast = fast.next
    } else {
      break
    }
    if (fast) {
      fast = fast.next
    } else {
      break
    }
    slow = slow.next
  }
  let latter = slow.next
  slow.next = null
  latter = reverseList(latter)
  const dummyNode = new ListNode(0, head)
  let current = dummyNode
  while (head || latter) {
    current.next = head
    current = current.next
    head = head.next
    if (latter) {
      current.next = latter
      current = current.next
      latter = latter.next
    }
  }
  // return dummyNode.next
}

// n次翻转链表
// function reorderList(head: ListNode | null): void {
//   let start = head
//   while (start.next) {
//     start.next = reverseList(start.next)
//     start = start.next
//   }
// }

function reverseList(head: ListNode | null) {
  if (head === null) {
    return null
  }
  const previous = new ListNode(0, head),
    current = head
  let next = current.next
  while (next !== null) {
    current.next = next.next
    next.next = previous.next
    previous.next = next
    next = current.next
  }
  return previous.next
}
// @lc code=end

describe('reorder-list', () => {
  test('1', () => {
    let list = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    )
    reorderList(list)
    expect(list).toStrictEqual(
      new ListNode(1, new ListNode(4, new ListNode(2, new ListNode(3))))
    )

    list = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
    reorderList(list)
    expect(list).toStrictEqual(
      new ListNode(
        1,
        new ListNode(5, new ListNode(2, new ListNode(4, new ListNode(3))))
      )
    )
  })
})
