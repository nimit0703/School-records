<template>
  <div class="container">
    <template v-if="this.$store.state.isLogin">
      <Nav class="my-2"></Nav>
      <router-view></router-view>
    </template>
    <template v-else>
      <Login />
    </template>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Nav from "./components/Nav.vue";

import Login from "./components/Login.vue";
// import {useState} from "./store/store"
export default {
  data() {
    return {
      isLogin: this.$store.state.isLogin,
    };
  },
  computed: {
    count() {
      return this.$store.state.isLogin;
    },
  },
  components: {
    Form,
    Login,
    Nav,
  },
};
</script>
