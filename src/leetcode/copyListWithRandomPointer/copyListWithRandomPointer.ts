// https://leetcode-cn.com/problems/copy-list-with-random-pointer/

export class Node {
  val: number
  next: Node | null
  random: number | Node | null
  constructor(val?: number, next?: Node, random?: number | Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

export function copyRandomList(head: Node | null): Node | null {
  const vHead = new Node(0, undefined, undefined)
  let vHeadRef = vHead
  const map = new Map<Node | number, Node>()
  while (head) {
    const newNode = new Node(head.val)
    vHeadRef.next = newNode
    vHeadRef = vHeadRef.next
    map.set(newNode, head)
    map.set(head, newNode)
    head = head.next
  }

  const result = vHead.next
  let newHead = result
  while (newHead) {
    const correspondingOldHead = map.get(newHead)
    if (correspondingOldHead.random) {
      const newRandomNode = map.get(correspondingOldHead.random)
      newHead.random = newRandomNode
    }
    newHead = newHead.next
  }
  return result
}
