import { ListNode } from "../public"

export function sortList(head: ListNode | null): ListNode | null {
  let sublength = 1
  const length = len(head)
  const dummyNode = new ListNode(0, head)
  while (sublength < length) {
    let index = 0
    let previous = dummyNode,
      current = dummyNode.next
    while (length - index > sublength) {
      const leftHead = current
      const [leftTail, rightHead] = proceed(current, sublength)
      const [rightTail, nextLeftHead] = proceed(rightHead, sublength)
      leftTail.next = null
      rightTail.next = null
      const mergedHead = merge(leftHead, rightHead)
      previous.next = mergedHead
      index += sublength * 2
      while (previous.next !== null) {
        previous = previous.next
      }
      current = nextLeftHead
    }
    // 注意边界情况：
    // [1, 2, 5, 4, -1]
    // 4.next = -1
    previous.next = current
    sublength = sublength * 2
  }
  return dummyNode.next
}

function merge(leftHead: ListNode, rightHead: ListNode) {
  const dummyNode = new ListNode(0)
  let current = dummyNode
  while (leftHead && rightHead) {
    if (leftHead.val <= rightHead.val) {
      const next = leftHead.next
      leftHead.next = null
      current.next = leftHead
      leftHead = next
    } else {
      const next = rightHead.next
      rightHead.next = null
      current.next = rightHead
      rightHead = next
    }
    current = current.next
  }

  current.next = leftHead || rightHead
  return dummyNode.next
}

function len(head: ListNode | null) {
  let length = 0
  while (head) {
    length++
    head = head.next
  }
  return length
}

function proceed(node: ListNode, step: number) {
  const dummyNode = new ListNode(0, node)
  let previous = dummyNode,
    current = dummyNode.next
  for (let i = 0; i < step; i++) {
    previous = current
    current = current.next
    // 当前进到null时停止，而不是最后一个不为null的节点。
    if (current === null) {
      break
    }
  }
  return [previous, current]
}
