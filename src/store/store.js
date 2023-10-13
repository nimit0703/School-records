// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const isLogin = JSON.parse(localStorage.getItem("isLogin")) || false;
const storedThisStudent = JSON.parse(localStorage.getItem("thisStudent")) || {};
const storedAllStudents = JSON.parse(localStorage.getItem("allStudents")) || [];

const store = new Vuex.Store({
  state: {
    showSpinner:false,
    timer:0,
    time:0,
    isLogin: isLogin,
    thisStudent: storedThisStudent,
    allStudents: storedAllStudents,
  },
  mutations: {
    logout(state) {
      state.isLogin = false;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));
    },
    login(state) {
      state.isLogin = true;
      localStorage.setItem("isLogin", JSON.stringify(state.isLogin));

    },
    setMarks(state, { id, marks }) {
      state.thisStudent.id = id;
      state.thisStudent.marks = marks;
      localStorage.setItem("thisStudent", JSON.stringify(state.thisStudent));
    },
    setStudent(state, { id, marks }) {
      const existingStudent = state.allStudents.find(
        (student) => student.id === id
      );
      if (existingStudent) {
        existingStudent.marks = marks;
      } else {
        const newStudent = {
          id,
          name: `student ${id}`,
          marks,
        };
        state.allStudents.push(newStudent);
      }
      localStorage.setItem("allStudents", JSON.stringify(state.allStudents));
    },
    setThisStudent(state, [id,data]) {
      console.log("in",data);
      const existingStudent = state.allStudents.find(
        (student) => student.id === id
        );
        if (existingStudent) {
          state.thisStudent = existingStudent;
        } else {
        const marks = {
          Math: 0,
          Compiler: 0,
          EngineeringGraphics: 0,
          DBMS: 0,
          SoftwareEngineering: 0,
        }
        state.thisStudent = {
          id,
          name:data.name,
          img:data.thumbnail,
          email:data.email,
          gender:data.gender, 
          marks,
        };
        state.allStudents.push(state.thisStudent)
        localStorage.setItem("allStudents", JSON.stringify(state.allStudents));
      }
      localStorage.setItem("thisStudent", JSON.stringify(state.thisStudent));
    },
    updateTime(state){
      state.time +=1;
    },
    setNewTimmer(state){
      state.time =0;
    }
    
  },
  getters: {
    getMarksById: (state) => (id) => {
      const student = state.allStudents.find((student) => student.id === id);

      if (student) {
        return student.marks;
      } else {
        return {
          Math: 0,
          Compiler: 0,
          EngineeringGraphics: 0,
          DBMS: 0,
          SoftwareEngineering: 0,
        };
      }
    },
    getAverageScore: (state) => (subject) => {
      const scores = state.allStudents.map((student) => student.marks[subject]);
      return scores.reduce((total, score) => total + score, 0) / scores.length;
    },

    // Calculate mean score for a subject
    getMeanScore: (state) => (subject) => {
      const scores = state.allStudents.map((student) => student.marks[subject]);
      return scores.reduce((total, score) => total + score, 0) / scores.length;
    },

    // Calculate maximum score for a subject
    getMaxScore: (state) => (subject) => {
      const scores = state.allStudents.map((student) => student.marks[subject]);
      return Math.max(...scores);
    },

    // Calculate minimum score for a subject
    getMinScore: (state) => (subject) => {
      const scores = state.allStudents.map((student) => student.marks[subject]);
      return Math.min(...scores);
    },
    
    // Calculate % score for a student
    getPercentageById: (state) => (id) => {
      const student = state.allStudents.find((student) => student.id === id);
    
      if (student) {
        const totalMarks = student.marks.Math + student.marks.Compiler + student.marks.EngineeringGraphics + student.marks.DBMS + student.marks.SoftwareEngineering;
        const percentage = (totalMarks / 500) * 100; // Assuming the total marks for all subjects is 500
        return percentage;
      } else {
        return 0; // You can return 0 or any other default value for students who are not found
      }
    },
  },
});

export default store;
