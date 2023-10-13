<template>
  <div>
    <div class="">
      <TableSorted></TableSorted>
    </div>
  </div>
</template>

<script>
import TableSorted from "../components/TableSorted.vue";

export default {
  components: {
    TableSorted,
  },
  data() {
    return {
     
    };
  },
  beforeDestroy() {
    console.log("beforeDestroyy :: byMarks")
    this.$store.state.showSpinner = true;
    setTimeout(() => {
      this.$store.state.showSpinner = false;
    },700);
  },
};
</script>
