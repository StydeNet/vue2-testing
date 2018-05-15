<template>
  <div>
    <Header />
    <input type="text" v-model="newTaskText">
    <button @click="add(newTaskText)" class="btn btn-primary">Add Task</button>
    <div>{{ activeTask.name }}</div>
    <div class="list-group mt-3">
      <Task
        v-for="(task, index) in allTasks"
        :key="index"
        :task="task"
        @delete="deleteTask(index)"
        @complete="completeTask(index)"
      >
      <span slot="close">x</span>
      </Task>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import Task from './Task';
import Header from './Header';

export default {
  name: 'ToDoList',

  data() {
    return {
      newTaskText: ''
    };
  },

  computed: {
    ...mapState(['activeTask']),

    ...mapGetters(['allTasks'])
  },

  components: { Task, Header },

  methods: {
    ...mapActions(['deleteTask', 'addTask', 'completeTask']),

    add(newTaskText) {
      this.addTask(newTaskText);
      this.newTaskText = '';
    }
  }
};
</script>
