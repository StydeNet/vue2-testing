<template>
  <div>
    <div>
      <span id="delete" @click="$emit('delete')">
        <slot name="close"></slot>
      </span>
      <router-link :to="{ path: '/task', params: { task } }"></router-link>
      <button @click="$emit('complete')">Complete Task</button>
    </div>
    {{ task }}
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Task',

  props: {
    task: String
  }
};
</script>
