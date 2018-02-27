<template>
  <div id="app">
    <div id="warning" v-if="!msg">Please fill the message</div>
    <input type="text" v-model="msg">
    <span id="message">{{ msg }}</span>
    <span id="full-name">{{ fullName }}</span>
    <button @click="toUppercase">Change firstName</button>
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
  },

  methods: {
    toUppercase() {
      this.firstName = this.firstName.toUpperCase();
    }
  }
};
</script>
