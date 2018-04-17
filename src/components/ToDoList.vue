<template>
  <div>
    <Header />
    <div>{{ activeTask.name }}</div>
    <Task
      v-for="task in allTasks"
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
import { mapGetters, mapState } from 'vuex';
import Task from './Task';
import Header from './Header';

export default {
  name: 'ToDoList',

  computed: {
    ...mapState(['activeTask']),

    ...mapGetters(['allTasks'])
  },

  components: { Task, Header },

  methods: {
    deleteTask(task) {
      console.log(task);
    }
  }
};
</script>
