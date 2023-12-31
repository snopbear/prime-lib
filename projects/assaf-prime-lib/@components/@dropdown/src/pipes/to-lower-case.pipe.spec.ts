import { GetFlagPipe } from './to-lower-case.pipe';

describe('GetFlagPipe', () => {
  it('create an instance', () => {
    const pipe = new GetFlagPipe();
    expect(pipe).toBeTruthy();
  });
});
