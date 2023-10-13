<template>
  <div class="nav-wrapper">
    <b-nav vertical class="w-20">
      <router-link to="/" tag="b-nav-item" exact-active-class="active"
        >Dashboard</router-link
      >
      <router-link to="add-data" tag="b-nav-item">Edit Marks</router-link>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        text="Compare"
        toggle-class="nav-link-custom"
        right
      >
        <router-link to="by-marks" tag="b-dropdown-item">By Marks</router-link>
        <router-link to="by-subjects" tag="b-dropdown-item"
          >By Subjects</router-link
        >
      </b-nav-item-dropdown>
      <b-nav-item tag="b-nav-item" to="logout">Logout</b-nav-item>
    </b-nav>
    <div class="d-flex p-2 text-secondary ml-2 text-center" style="width: auto; margin-top: 50vh;" ref="timer">
      <span class="small">expires: </span>
      <transition name="fade" mode="out-in">
        <span class="text-center ml-1 small"  :key="time">
          {{ 5 - time}}</span
        >
      </transition>
      <span class="small">m</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    time() {
      return this.$store.state.time; 
    },
  },
  watch:{
    time(newTime,oldTime){
      if(newTime>2){
        const ele = this.$refs.timer;
        console.warn("session worning 2 min left")
        ele.classList.remove('text-secondary');
        ele.classList.add('text-warning');
      }
      if(newTime>4){
        const ele = this.$refs.timer;
        console.warn("session alert 1 min left")
        
        ele.classList.remove('text-warning');
        ele.classList.add('text-danger');
      }
      if(newTime === 5){
        console.warn("session over");
        this.$router.push("/logout");
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
.nav-wrapper{
  min-height: 100vh;
}
</style>
