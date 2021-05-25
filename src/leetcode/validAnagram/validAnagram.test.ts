import {validAnagram} from './validAnagram';
test('sumIndexOfTarget', () => {
  expect(validAnagram('sum', 'usm')).toStrictEqual(true);
  expect(validAnagram('sum', 'us')).toStrictEqual(false);
  expect(validAnagram('rat', 'car')).toStrictEqual(false);
});
