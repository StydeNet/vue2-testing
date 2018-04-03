<template>
  <div>MY HEADER</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Header',

  data() {
    return {
      user: {}
    };
  },

  created() {
    //call to axios
    axios.get('/api/user').then(data => {
      this.user = data;
    });
  }
};
</script>
