import {minWindow} from './paper'
describe('paper', () => {
  test('paper1', () => {
    expect(minWindow('ADOBECODEBANC', 'ABC')).toStrictEqual('BANC')
  })
})
