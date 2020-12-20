import sumIndexOfTarget from './sumIndexOfTarget';
test('sumIndexOfTarget', () => {
  expect(sumIndexOfTarget.violence([1, 2, 44, 312231, 10085], 10086)).toStrictEqual([0, 4]);
  expect(sumIndexOfTarget.violence([1, 2, 44, 312231, 10085], 46)).toStrictEqual([1, 2]);

  expect(sumIndexOfTarget.hash([1, 2, 44, 312231, 10085], 10086)).toStrictEqual([0, 4]);
  expect(sumIndexOfTarget.hash([1, 2, 44, 312231, 10085], 46)).toStrictEqual([1, 2]);
  expect(sumIndexOfTarget.hash([1, 2, 44, 312231, 10085], 312233)).toStrictEqual([1, 3]);
});
