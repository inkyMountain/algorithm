import {generateParenthesis} from './generateParenthesis'

describe('generateParenthesis', () => {
  it('generateParenthesis0', () => {
    expect(generateParenthesis(3)).toStrictEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ])
  })

  it('generateParenthesis1', () => {
    expect(generateParenthesis(1)).toStrictEqual(['()'])
  })
})
