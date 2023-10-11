<template>
  <div class="">
    <template v-if="this.$store.state.isLogin">
      <div class="d-flex align-items-stretch">
        <Nav class="border-right hi-100 p-3 m-2"></Nav>
        <router-view class="p-3"></router-view>
      </div>
    </template>
    <template v-else>
      <div class="container " style="display: flex; align-items: center; justify-content: center; height: 100vh;">
        <LoginPage />
      </div>
    </template>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Nav from "./components/Nav.vue";

import LoginPage from "./views/LoginPage.vue";

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
    Nav,
    LoginPage,
  },
};
</script>

<style scoped>
.hi-100 {
  height: 100vh;
  /* width: 20%; */
}
</style>
