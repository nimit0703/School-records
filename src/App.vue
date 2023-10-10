<template>
  <div class="container">
    <Nav class="my-2"></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Nav from "./components/Nav.vue";
export default {
  components: {
    Form,
    Nav,
  },
};
</script>
