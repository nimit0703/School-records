<template>
  <div>
    <canvas id="marksChart" ref="marksChart"></canvas>
  </div>
</template>

<script>
// Import Chart.js and register linear scale
import Chart from "chart.js/auto";

export default {
  props: {
    items: Array,
  },
  data() {
    return {
      marksData: this.items,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.marksChart.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.marksData.map((item) => item.subject),
          datasets: [
            {
              label: "My Marks",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(78, 192, 192, 1)",
              borderWidth: 1,
              data: this.marksData.map((item) => item.my_marks),
            },
            {
              label: "Average Marks",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
              data: this.marksData.map((item) => item.avg_marks),
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>
