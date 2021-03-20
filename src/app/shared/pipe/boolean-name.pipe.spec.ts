import { BooleanNamePipe } from './boolean-name.pipe';

describe('BooleanNamePipe', () => {
  it('create an instance', () => {
    const pipe = new BooleanNamePipe();
    expect(pipe).toBeTruthy();
  });
});
