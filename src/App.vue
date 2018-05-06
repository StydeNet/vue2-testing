<template>
  <div id="app">
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
<style>
.red {
  color: red;
}
</style>
