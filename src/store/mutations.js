export default {
  addTask: (state, task) => {
    state.tasks.push({
      name: task,
      done: false
    });
  },

  completeTask: (state, index) => {
    state.tasks[index].done = true;
  },

  deleteTask: (state, index) => {
    state.tasks.splice(index, 1);
  }
};
