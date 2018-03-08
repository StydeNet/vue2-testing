<template>
  <div>{{ task }}</div>
</template>
<script>
export default {
  name: 'Task',

  props: {
    task: String
  }
};
</script>
