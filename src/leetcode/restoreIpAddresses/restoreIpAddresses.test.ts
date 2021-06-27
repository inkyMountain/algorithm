import {restoreIpAddresses} from './restoreIpAddresses';

test('restoreIpAddresses0', () => {
  const result = restoreIpAddresses('010010');
  expect(result).toStrictEqual(['0.10.0.10', '0.100.1.0']);
});
