import {convertToTitle} from './excel-sheet-column-title'

describe('excelColumn', () => {
  test('excelColumn1', () => {
    expect(convertToTitle(1)).toStrictEqual('A')
  })
  test('excelColumn2', () => {
    expect(convertToTitle(2)).toStrictEqual('B')
  })
  test('excelColumn3', () => {
    expect(convertToTitle(27)).toStrictEqual('AA')
  })
  test('excelColumn4', () => {
    expect(convertToTitle(701)).toStrictEqual('ZY')
  })
  test('excelColumn5', () => {
    expect(convertToTitle(53)).toStrictEqual('BA')
  })
})
