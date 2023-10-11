export default {
    methods: {
        getReport() {
          const scores = this.marks;
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
          const averageMarks = totalMarks / numSubjects;
          const percentage = (totalMarks / (numSubjects * 100)) * 100;
    
          // Populate the report object
          report["Average Marks"] = averageMarks;
          report["Total Marks"] = totalMarks;
          report["Percentage"] = percentage;
          report["Best Subject"] = `${bestSubject} (${bestScore})`;
          report["Worst Subject"] = `${worstSubject} (${worstScore})`;
    
          return report;
        },
      },
    
}