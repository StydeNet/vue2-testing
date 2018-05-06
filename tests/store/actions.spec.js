import actions from '@/store/actions';

describe('store actions', () => {
  let store;
  let commit;

  beforeEach(() => {
    commit = jest.fn();
    store = { commit };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('addTask action calls addTask mutation', () => {
    actions.addTask(store, 'MY TASK');
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('addTask');
    expect(commit.mock.calls[0][1]).toBe('MY TASK');
  });

  test('deleteTask action calls deleteTask mutation', () => {
    actions.deleteTask(store, 17);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('deleteTask');
    expect(commit.mock.calls[0][1]).toBe(17);
  });

  test('completeTask action calls completeTask mutation', () => {
    actions.completeTask(store, 17);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('completeTask');
    expect(commit.mock.calls[0][1]).toBe(17);
  });

  test('uncompleteTask action calls uncompleteTask mutation', () => {
    actions.uncompleteTask(store, 17);
    expect(commit).toHaveBeenCalledTimes(1);
    expect(commit.mock.calls[0][0]).toBe('uncompleteTask');
    expect(commit.mock.calls[0][1]).toBe(17);
  });
});
