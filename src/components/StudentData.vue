<template>
  <div class="border p-3" style="width: 48vw; height: 95vh">
    <h5 class="text-success">Your Score</h5>
    <div
      v-for="(mark, sub) of marks"
      class="d-flex border my-1"
      style="width: 35vw"
    >
      <div class="text-center mr-2 bg-light" style="width: 15vw">{{ sub }}</div>
      <div
        class="text-center my-1 mr-2 text-success"
        style="width: 10vw"
        :class="{ 'text-danger': mark < 30 }"
      >
        {{ mark }}
      </div>
    </div>
    <h5 class="text-info mt-4">Your Report</h5>
    <div
      v-for="(mark, sub) of report"
      class="d-flex border my-1"
      style="width: 35vw"
    >
      <div class="text-center mr-2 bg-light" style="width: 15vw">{{ sub }}</div>
      <div class="text-center my-1 mr-2" style="width: 15vw">{{ mark }}</div>
    </div>
  </div>
</template>

<script>
import stats from "../mixin/stats";
export default {
  data() {
    return {
      report: this.getReport(),
    };
  },
  mixins: [stats],
  
  beforeCreate() {
    this.userData = this.$store.state.thisStudent;
    this.marks = this.userData.marks;
  },
};
</script>
