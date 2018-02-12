<template>
  <div id="app">
    <button @click="msg = 'Updated text'">Update me</button>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello World!'
    };
  }
};
</script>
