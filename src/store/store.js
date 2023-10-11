// store.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storedThisStudent = JSON.parse(localStorage.getItem("thisStudent")) || {};
const storedAllStudents = JSON.parse(localStorage.getItem("allStudents")) || [];

const store = new Vuex.Store({
  state: {
    isLogin: true,
    thisStudent: storedThisStudent,
    allStudents: storedAllStudents,
  },
  mutations: {
    logout(state) {
      state.isLogin = false;
      // localStorage.removeItem('thisStudent');
      // localStorage.removeItem('allStudents');
    },
    login(state) {
      state.isLogin = true;
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
  },
  getters: {
    getMarksById: (state) => (id) => {
      const student = state.allStudents.find((student) => student.id === id);

      if (student) {
        return student.marks;
      } else {
        return {
          Math: 0,
          Science: 0,
          English: 0,
          SS: 0,
          Gujarati: 0,
        };; 
      }
    },
  },
});

export default store;
