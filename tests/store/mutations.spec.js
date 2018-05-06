import mutations from '@/store/mutations';

describe('store mutations', () => {
  test('addTask adds a new task to tasks array', () => {
    const state = {
      tasks: []
    };
    mutations.addTask(state, 'My Task');
    expect(state.tasks).toEqual([{ name: 'My Task', done: false }]);
  });

  test('completeTask gets task as param and sets done to true', () => {
    const taskB = { name: 'TASK B', done: false };
    const state = {
      tasks: [{ name: 'TASK A', done: false }, taskB]
    };
    mutations.completeTask(state, taskB);
    expect(state.tasks).toEqual([
      { name: 'TASK A', done: false },
      { name: 'TASK B', done: true }
    ]);
  });

  test('uncompleteTask gets task as param and sets done to false', () => {
    const taskB = { name: 'TASK B', done: true };
    const state = {
      tasks: [{ name: 'TASK A', done: true }, taskB]
    };
    mutations.uncompleteTask(state, taskB);
    expect(state.tasks).toEqual([
      { name: 'TASK A', done: true },
      { name: 'TASK B', done: false }
    ]);
  });

  test('deleteTask gets task index and delete it', () => {
    const state = {
      tasks: [{ name: 'TASK A', done: false }, { name: 'TASK B', done: false }]
    };
    mutations.deleteTask(state, 1);
    expect(state.tasks).toEqual([{ name: 'TASK A', done: false }]);
  });
});
