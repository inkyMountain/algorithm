const units = ['Billion', 'Million', 'Thousand', '']
const oneTenths = [
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
]
const tenths = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
]
const digits = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
]

export function numberToWords(num: number | string): string {
  if (num === 0) {
    return 'Zero'
  }
  num = num.toString()
  while (num.length < 10) {
    num = '0' + num
  }
  const segments = [
    num.substring(0, 1),
    num.substring(1, 4),
    num.substring(4, 7),
    num.substring(7, 11),
  ].map((segment) => (segment === '000' ? '0' : segment))

  let result = ''
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    result += segmentToWords(segment, i)
  }
  // replace multi spaces with single space
  return result.trim().replace(/\s{2,}/g, ' ')
}

function segmentToWords(segment: string, index: number): string {
  while (segment.length < 3) {
    segment = '0' + segment
  }
  const [first, second, third] = segment.split('')
  const hundred = first === '0' ? '' : digits[first] + ' Hundred '

  let rest = ''
  if (second === '1') {
    rest = oneTenths[third] + ' '
  } else if (second === '0') {
    if (third === '0') {
      rest = ''
    } else {
      rest = ' ' + digits[third] + ' '
    }
  } else {
    // e.g. 20 should be twenty instead of twenty zero
    rest = `${tenths[second]} ${digits[third] === 'Zero' ? '' : digits[third]}`
  }
  rest = index === 0 ? rest : rest + ' '
  const unit = (hundred + rest).trim() === '' ? '' : units[index]

  return ` ${hundred} ${rest} ${unit} `
}
