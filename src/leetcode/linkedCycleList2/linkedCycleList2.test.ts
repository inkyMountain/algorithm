import {linkedCycleList2} from './linkedCycleList2';
import {generateHeadNode} from '../public';

test('linkedCycleList2', () => {
  const head = generateHeadNode([3, 2, 0, -4], 0, 1);
  expect(linkedCycleList2(head)).toEqual(head.next);
});
