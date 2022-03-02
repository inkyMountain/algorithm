import {myAtoi} from './paper'

describe('excelColumn', () => {
  test('excelColumn1', () => {
    expect(excelColumn(1)).toStrictEqual('A')
  })
  test('excelColumn2', () => {
    expect(excelColumn(2)).toStrictEqual('B')
  })
  test('excelColumn3', () => {
    expect(excelColumn(27)).toStrictEqual('AA')
  })
  test('excelColumn4', () => {
    expect(excelColumn(701)).toStrictEqual('ZY')
  })
  test('excelColumn5', () => {
    expect(excelColumn(53)).toStrictEqual('BA')
  })
})
