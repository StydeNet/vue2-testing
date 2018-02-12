<template>
  <div id="app">
    <input type="text" v-model="msg">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '',
      firstName: '',
      lastName: ''
    };
  },

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
};
</script>
