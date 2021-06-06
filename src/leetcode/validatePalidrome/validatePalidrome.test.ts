import {isPalindrome} from './validatePalidrome';

test('validatePalidrome0', () => {
  expect(isPalindrome('0P')).toBeFalsy();
});
test('validatePalidrome1', () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
});

test('validatePalidrome2', () => {
  expect(isPalindrome('oP')).toBeFalsy();
});

test('validatePalidrome2', () => {
  expect(isPalindrome('a')).toBeTruthy();
});
