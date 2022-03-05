import {minWindow} from './minimum-window-substring'

describe('paper', () => {
  test('paper1', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC')
  })
})
