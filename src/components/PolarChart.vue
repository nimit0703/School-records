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
          type: "heatmap", // Use a heatmap chart
          data: {
            labels: this.marksData.map((item) => item.subject),
            datasets: [
              {
                data: this.marksData.map((item) => item.my_marks - item.avg_marks),
                borderWidth: 1,
                borderColor: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(75, 192, 192, 0.8)",
              },
            ],
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                reverse: true, // Reverse the y-axis for a standard heatmap layout
              },
            },
          },
        });
      },
    },
  };
  </script>
  