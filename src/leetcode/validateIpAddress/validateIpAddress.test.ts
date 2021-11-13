import {validIPAddress} from './validateIpAddress'

describe('validIPAddress', () => {
  it('validIPAddress0', () => {
    expect(validIPAddress('172.16.254.1')).toStrictEqual('IPv4')
  })

  it('validIPAddress1', () => {
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toStrictEqual(
      'IPv6'
    )
  })

  it('validIPAddress2', () => {
    expect(validIPAddress('256.256.256.256')).toStrictEqual('Neither')
  })

  it('validIPAddress3', () => {
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:')).toStrictEqual(
      'Neither'
    )
  })

  it('validIPAddress4', () => {
    expect(validIPAddress('1e1.4.5.6')).toStrictEqual('Neither')
  })

  it('validIPAddress5', () => {
    expect(validIPAddress('2001:db8:85a3:0::8a2E:0370:7334')).toStrictEqual(
      'Neither'
    )
  })

  it('validIPAddress6', () => {
    expect(validIPAddress('11.0.0.1')).toStrictEqual(
      'IPv4'
    )
  })
})
