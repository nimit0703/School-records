<template>
  <div class="mt-3">
    <div class="d-flex">
      <StudentData class="shadow-sm"></StudentData>
      <StudentProfile class="ml-5 p-3 shadow-sm"></StudentProfile>
    </div>
  </div>
</template>
<script>
import StudentData from "../components/StudentData.vue";
import StudentProfile from "../components/StudentProfile.vue";

export default {
  components: {
    StudentData,
    StudentProfile,
  },
  mounted() {
    console.log("mounted :: Dashboard")
    this.$store.state.timer = setInterval(() => {
      this.$store.commit("updateTime");
    }, 1000*60);
  },
  beforeDestroy() {
    console.log("beforeDestroyy :: DashBoard")
    this.$store.state.showSpinner = true;

    setTimeout(() => {
      this.$store.state.showSpinner = false;
    }, 700);
  },
};
</script>
