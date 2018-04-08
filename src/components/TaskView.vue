<template>
  <div></div>
</template>
<script>
export default {
  name: 'TaskView',

  data() {
    return {
      task: this.$route.params.task
    };
  }
};
</script>
