import { Office } from './office';

describe('Office', () => {
  it('should create an instance', () => {
    expect(new Office(0, '', 10)).toBeTruthy();
  });
});
