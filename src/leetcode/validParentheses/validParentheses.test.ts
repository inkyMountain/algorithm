import {validParentheses} from './validParentheses';

test('validParentheses0', () => {
  expect(validParentheses('{')).toBeFalsy();
});

test('validParentheses1', () => {
  expect(validParentheses('{}')).toBeTruthy();
});
