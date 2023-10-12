<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :tbody-tr-class="rowClass"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["subject", "my_marks", "avg_marks", "mean", "max", "min"],
      items: [],
    };
  },
  created() {
    const thisMarks = this.userData.marks;
    let i = -1;
    for (let sub in thisMarks) {
      i++;
      const my_marks = thisMarks[sub];
      const matchingObject = this.alldata.find((obj) => obj.name === sub);

      const avg_marks = matchingObject.avg.toFixed(2);
      const mean = matchingObject.mean.toFixed(2);
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
  props: {
    alldata: Array,
    userData: Object,
  },
  methods: {
    rowClass(item, type) {
      console.log("item", item, type);
      if (!item || type !== "row") return;
      console.log("hey");
      return {
        "table-danger": item.my_marks < 30,
      };
    },
  },
};
</script>
