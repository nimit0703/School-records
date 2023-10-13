<template>
  <div>logout</div>
</template>
<script>
export default {
  mounted() {
    console.log("logout mounted")
    this.$store.commit("logout");
    this.$router.push("/login");
  },
  destroyed(){
    console.log("logout distroyed")
    clearInterval(this.$store.state.timer)
    this.$store.commit("setNewTimmer");
  }
};
</script>
