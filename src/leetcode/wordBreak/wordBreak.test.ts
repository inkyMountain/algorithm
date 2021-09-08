import {wordBreak} from './wordBreak'

test('wordBreak0', () => {
  expect(wordBreak('leetcode', ['leet', 'code'])).toStrictEqual(true)
})

test('wordBreak1', () => {
  expect(wordBreak('applepenapple', ['apple', 'pen'])).toStrictEqual(true)
})

test('wordBreak2', () => {
  expect(
    wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])
  ).toStrictEqual(false)
})
