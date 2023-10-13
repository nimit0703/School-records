<template>
  <div>
    <template v-if="$store.state.isLogin">
      <div class="d-flex align-items-stretch">
        <Nav class="border-right hi-100 p-3 m-2"></Nav>
        <router-view class="p-3 flex-grow-1"></router-view>
        <Spinner v-show="this.$store.state.showSpinner"></Spinner>
      </div>
    </template>
    <template v-else>
      <div
        class="container d-flex align-items-center justify-content-center hi-100"
      >
        <LoginPage></LoginPage>
      </div>
    </template>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Spinner from "./components/Spinner.vue";
import LoginPage from "./views/LoginPage.vue";

export default {
  data() {
    return {
      timer: null,
      isLogin: this.$store.state.isLogin,
    };
  },
  computed: {
    count() {
      return this.$store.state.isLogin;
    },
  },
  components: {
    Nav,
    LoginPage,
    Spinner,
  },
  methods: {},
  
};
</script>

<style scoped>
.hi-100 {
  height: 100vh;
  /* width: 20%; */
}
</style>
