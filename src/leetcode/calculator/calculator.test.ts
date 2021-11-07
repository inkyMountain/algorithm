import {calculate} from './calculator';

describe('caculate', () => {
  it('caculate', () => {
    expect(calculate('-(1+(41+5+2)-3)+(-6 + 8)')).toStrictEqual(-44);
  });
});
