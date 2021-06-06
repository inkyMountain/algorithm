import {MyStack} from './myStack';

test('myQueue0', () => {
  const queue = new MyStack();
  const result = [
    queue.push(1),
    queue.push(2),
    queue.peek(),
    queue.pop(),
    queue.empty(),
  ];
  expect(result).toStrictEqual([null, null, 1, 1, false]);
});

test('myQueue1', () => {
  const queue = new MyStack();
  const result = [
    queue.push(1),
    queue.push(2),
    queue.push(3),
    queue.push(4),
    queue.pop(),
    queue.push(5),
    queue.pop(),
    queue.pop(),
    queue.pop(),
    queue.pop(),
  ];
  expect(result).toStrictEqual([null, null, null, null, 1, null, 2, 3, 4, 5]);
});
