<template>
  <div>
    <Header />
    <Task
      v-for="task in tasks"
      :key="task"
      :task="task"
      @delete="deleteTask(task)"
    >
    <span slot="close">x</span>
    Random text
    </Task>
  </div>
</template>
<script>
import Task from './Task';
import Header from './Header';

export default {
  name: 'ToDoList',

  data() {
    return {
      tasks: [],
      params: this.$route.params
    };
  },

  components: { Task, Header },

  methods: {
    deleteTask(task) {
      console.log(task);
    }
  }
};
</script>
