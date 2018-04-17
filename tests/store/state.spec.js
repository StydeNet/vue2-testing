import state from '@/store/state';

describe('store state', () => {
  test('default state is correct', () => {
    expect(state).toEqual({
      tasks: [],
      activeTask: {}
    });
  });
});
