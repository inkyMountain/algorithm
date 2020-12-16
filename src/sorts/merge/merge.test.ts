import sort, {merge} from './merge';
import sortAnswer, {merge as mergeAnswer} from './answer';

test('sort', () => {
  expect(sortAnswer([2, 1, 3])).toStrictEqual([1, 2, 3]);
  expect(sortAnswer([12, 423, 10086, 3, 43])).toStrictEqual([3, 12, 43, 423, 10086]);

  expect(sort([2, 1, 3])).toStrictEqual([1, 2, 3]);
  expect(sort([12, 423, 10086, 3, 43])).toStrictEqual([3, 12, 43, 423, 10086]);
});

test('merge function', () => {
  expect(
    mergeAnswer([100, 54, 211, 10, 10086, 1], 1, 3, 5)
  ).toStrictEqual([100, 10, 54, 211, 10086, 1]);

  expect(
    mergeAnswer([100, 10, 10086, 54, 211, 1], 1, 3, 5)
  ).toStrictEqual([100, 10, 54, 211, 10086, 1]);

  expect(
    merge([100, 54, 211, 10, 10086, 1], 1, 3, 5)
  ).toStrictEqual([100, 10, 54, 211, 10086, 1]);

  expect(
    merge([100, 10, 10086, 54, 211, 1], 1, 3, 5)
  ).toStrictEqual([100, 10, 54, 211, 10086, 1]);

});
