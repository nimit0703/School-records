<template>
  <div>
    <canvas id="marksChart" ref="marksChart"></canvas>
  </div>
</template>

<script>
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
        type: "radar", // Use a radar chart
        data: {
          labels: this.marksData.map((item) => item.subject),
          datasets: [
            {
              label: "My Marks",
              data: this.marksData.map((item) => item.my_marks),
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
            {
              label: "Average Marks",
              data: this.marksData.map((item) => item.avg_marks),
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
            },
          ],
        },
        options: {
          scales: {
            r: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
};
</script>
