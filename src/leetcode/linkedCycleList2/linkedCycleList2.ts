// https://leetcode-cn.com/problems/linked-list-cycle-ii/
import {ListNode} from '../public';

// solution1: Use Set to record visited nodes so we know if a node has been
// visited;
export function linkedCycleList2(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  const visited = new Set()
  while (head.next) {
    visited.add(head);
    if (visited.has(head.next)) {
      return head.next;
    }
    head = head.next;
  }
  return null;
}

// solution2: Use fast/slow pointer to judge if a linkedList is cycled.
// And a third pointer can be used to figure out which node the tail
// connects to.
// export function linkedCycleList2(head: ListNode | null): ListNode | null {
//   let slow = null, fast = null;
//  conclusion1: When slow is catched up, its distance is shorter than one
//  round.

//  conclusion2: When slow is catched up, its distance to the entry of cycle
//  is the same as the distance to the entry of third pointer who starts from
//  head at the time.
// }
