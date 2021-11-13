// https://leetcode-cn.com/problems/validate-ip-address/
export function validIPAddress(queryIP: string): string {
  const ipv4Split = queryIP.split('.')
  const isIpv4 = ipv4Split.length === 4 && ipv4Split.every(function(part) {
    const hasLeadingZero = part.startsWith('0') && part !== '0'
    const num = parseInt(part)
    const isNumInRange = num >= 0 && num <= 255
    const isNumber = part.split('').every(char => /\d/.test(char))
    return isNumber && isNumInRange && !hasLeadingZero
  })
  if (isIpv4) {
    return 'IPv4'
  }

  const ipv6Split = queryIP.split(':')
  const isIpv6 = ipv6Split.length === 8 && ipv6Split.every(function(part) {
    const isEveryCharValid = part.split('').every(char => /[a-fA-F0-9]/.test(char))
    const isLengthValid = part.length > 0 && part.length <= 4
    return isLengthValid && isEveryCharValid
  })
  if (isIpv6) {
    return 'IPv6'
  }
  return 'Neither'
}
