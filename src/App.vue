<template>
  <div class="">
    <template v-if="this.$store.state.isLogin">
      <div class="d-flex align-items-stretch">
        <Nav class="border-right hi-100 p-3 m-2"></Nav>
        <router-view class="p-3"></router-view>
      </div>
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

<style scoped>
.hi-100 {
  height: 100vh;
  /* width: 20%; */
}
</style>
