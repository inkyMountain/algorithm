import {longestValidParentheses} from './longest-valid-parentheses'

describe('longest-valid-parentheses', () => {
  test('longest-valid-parentheses', () => {
    expect(longestValidParentheses('(()')).toStrictEqual(2)
  })
  test('longest-valid-parentheses2', () => {
    expect(longestValidParentheses('(())')).toStrictEqual(4)
  })
})
