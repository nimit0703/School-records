<template>
  <div>
    <span>By Subjects </span>
    <div class="my-2">19041010{{ userData.id }}</div>
    <hr />
    <div class="d-flex">
      <div class="left border p-3 mr-3" style="width: 50vw; height: 50vh;">
        <Table :alldata="alldata" :userData="userData"></Table>
      </div>
      <div class="right border p-3" style="width: 30vw">
        <Chart :items="items" class="mb-5"/>
        <Chart2 :items="items" class="mt-5"/>
      </div>
    </div>
  </div>
</template>

<script>
import stats from "../mixin/stats";
import Table from "../components/Table.vue";
import Chart from "../components/Chart.vue";
import Chart2 from "../components/Chart2.vue";
export default {
  mixins: [stats],
  data() {
    return {
      alldata: this.getAllDataReport(),
      userData: this.$store.state.thisStudent,
      items: [],
    };
  },
  components: {
    Table,
    Chart,
    Chart2,
  },
  created() {
    const thisMarks = this.userData.marks;
    let i = -1;
    for (let sub in thisMarks) {
      i++;
      const my_marks = thisMarks[sub];
      const matchingObject = this.alldata.find((obj) => obj.name === sub);

      const avg_marks = matchingObject.avg;
      const mean = matchingObject.mean;
      const max = matchingObject.max;
      const min = matchingObject.min;
      const values = {
        subject: sub,
        my_marks,
        avg_marks,
        mean,
        max,
        min,
      };
      this.items.push(values);
      console.log(values);
    }
  },
};
</script>
