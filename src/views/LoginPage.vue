<template>
    <div>
        <Login></Login>
    </div>
</template>
<script>
import Login from '../components/Login.vue';
export default{
    components:{
        Login,
    },
    beforeDestroy() {
    console.log("bySubject before destroy", )
    this.$store.state.showSpinner = true;

    setTimeout(() => {
      this.$store.state.showSpinner = false;
    },700);
  },
}
</script>