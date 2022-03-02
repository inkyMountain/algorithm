export function convertToTitle(columnNumber: number): string {
  let result = ''
  const decimal = 26
  const aCharCode = 'A'.charCodeAt(0)
  while (columnNumber > 0) {
    columnNumber--
    const remainder = columnNumber % decimal
    columnNumber = (columnNumber - remainder) / decimal
    result = String.fromCharCode(aCharCode + remainder) + result
  }
  
  return result
};
