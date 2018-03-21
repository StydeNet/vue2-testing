<template>
  <div>
    <div>
      <span id="delete" @click="$emit('delete')">
        <slot name="close"></slot>
      </span>
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
