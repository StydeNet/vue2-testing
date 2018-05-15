<template>
  <div id="app" class="container">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList';

export default {
  name: 'App',

  components: { ToDoList }
};
</script>
<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
