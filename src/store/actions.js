export default {
  addTask: ({ commit }, task) => {
    commit('addTask', task);
  },

  deleteTask: ({ commit }, index) => {
    commit('deleteTask', index);
  },

  completeTask: ({ commit }, index) => {
    commit('completeTask', index);
  },

  uncompleteTask: ({ commit }, index) => {
    commit('uncompleteTask', index);
  }
};
