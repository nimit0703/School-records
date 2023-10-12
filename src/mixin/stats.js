export default {
  methods: {
    getReport() {
      const scores = this.$store.state.thisStudent.marks;
      const report = {};

      // Initialize variables for total marks and best/worst scores
      let totalMarks = 0;
      let bestSubject = "";
      let bestScore = -1;
      let worstSubject = "";
      let worstScore = Number.MAX_VALUE; // Initialize to a high value

      // Loop through the subject scores
      for (const subject in scores) {
        const score = scores[subject];
        totalMarks += score;

        // Update best and worst scores
        if (score > bestScore) {
          bestScore = score;
          bestSubject = subject;
        }

        if (score < worstScore) {
          worstScore = score;
          worstSubject = subject;
        }
      }

      // Calculate average marks and percentage
      const numSubjects = Object.keys(scores).length;
      const averageMarks = (totalMarks / numSubjects).toFixed(2);
      const percentage = ((totalMarks / (numSubjects * 100)) * 100).toFixed(2);

      console.log(averageMarks,percentage)

      // Populate the report object
      report["Average Marks"] = averageMarks;
      report["Total Marks"] = totalMarks;
      report["Percentage"] = percentage;
      report["Best Subject"] = `${bestSubject} (${bestScore})`;
      report["Worst Subject"] = `${worstSubject} (${worstScore})`;

      return report;
    },
    getAllDataReport() {
      const thisMarks = this.$store.state.thisStudent.marks;
      const allData = [];
      for (let sub in thisMarks) {
        const name = sub;
        const avg = this.$store.getters.getAverageScore(name);
        const mean = this.$store.getters.getMeanScore(name);
        const max = this.$store.getters.getMaxScore(name);
        const min = this.$store.getters.getMinScore(name);
        const subData = {
          name: name,
          avg: avg,
          mean: mean,
          max: max,
          min: min,
        };
        allData.push(subData);
      }
      // console.log(allData);
      return allData;
    },
  },
};
