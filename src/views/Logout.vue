<template>
  <div>logout</div>
</template>
<script>
export default {
  mounted() {
    console.log("logout mounted")
    this.$store.state.showSpinner = true;

    setTimeout(() => {
      this.$store.state.showSpinner = false;
      this.$store.commit("logout");
      this.$router.push("/login");
    }, 700);
  },
  beforeDestroy() {
    console.log("beforeDestroy :: Logout");
  },
  destroyed(){
    console.log("logout distroyed")
    clearInterval(this.$store.state.timer)
    this.$store.commit("setNewTimmer");
  }
};
</script>
