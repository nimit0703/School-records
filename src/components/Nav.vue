<template>
  <div class="nav-wrapper">
    <b-nav vertical class="w-20">
      <router-link to="/" tag="b-nav-item" exact-active-class="active"
        >Dashboard</router-link
      >
      <router-link to="add-data" tag="b-nav-item">Add Data</router-link>
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
    <div class="d-flex p-2 text-danger ml-2 text-center" style="width: auto; margin-top: 50vh;">
      <span class="small">expires: </span>
      <transition name="fade" mode="out-in">
        <span class="text-center ml-1 small"  :key="timeKey">
          {{ 30 - displayTime }}</span
        >
      </transition>
      <span class="small">m</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeKey: 0,
    };
  },
  computed: {
    displayTime() {
      return this.$store.state.time; // Use a computed property for display
    },
  },
  watch: {
    displayTime: function (newTime, oldTime) {
      // Update the time key to trigger the transition
      this.timeKey++;
    },
  },
  methods: {},
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
</style>
