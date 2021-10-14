import {isSubsequence} from './isSubsequence'

describe('isSubsequence', () => {
  it('isSubsequence0', () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBeFalsy()
  })
})
