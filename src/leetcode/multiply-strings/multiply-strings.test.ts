import {multiply} from './multiply-strings'

describe('multiply', () => {
  test('multiply', () => {
    expect(multiply('123', '456')).toStrictEqual('56088')
    expect(multiply('0', '0')).toStrictEqual('0')
  })
})
