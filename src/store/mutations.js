export default {
  addTask: (state, task) => {
    state.tasks.push({
      name: task,
      done: false
    });
  },

  completeTask: (state, task) => {
    task.done = true;
  },

  uncompleteTask: (state, task) => {
    task.done = false;
  },

  deleteTask: (state, index) => {
    state.tasks.splice(index, 1);
  }
};
