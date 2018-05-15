<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ disabled: task.done }"
  >
    <div>
      <router-link :to="{ path: '/task', params: { task } }"></router-link>
      {{ task.name }}<input class="ml-3 extra-class" v-model="isChecked" type="checkbox">
    </div>
    <span class="badge badge-pill badge-danger" id="delete" @click="$emit('delete')">
      <slot name="close"></slot>
    </span>
    <slot></slot>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Task',

  props: {
    task: Object
  },

  computed: {
    isChecked: {
      get() {
        if (!this.task) return false;
        return this.task.done;
      },

      set(value) {
        if (value) {
          this.completeTask(this.task);
        } else {
          this.uncompleteTask(this.task);
        }
      }
    }
  },

  methods: {
    ...mapActions(['completeTask', 'uncompleteTask'])
  }
};
</script>
