import {evalRPN} from './evalRPN';

test('evalRPN0', () => {
  expect(evalRPN(['2', '1', '+', '3', '*'])).toStrictEqual(9);
});
