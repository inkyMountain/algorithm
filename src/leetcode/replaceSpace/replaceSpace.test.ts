import {replaceSpace} from './replaceSpace';

test('replace space', () => {
  let str = 'We are happy.';
  expect(replaceSpace(str) === 'We%20are%20happy.').toBeTruthy();
});
