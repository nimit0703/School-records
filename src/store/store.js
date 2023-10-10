// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      isLogin:true,
      thisStudent:{
        id:1,
        name:"student 1",
        marks:{
          'Math':0, 
          'Science':0,
          'English':0,
          'S.S':0,
          'Gujarati':0,
        }
      }
    },
    mutations:{
      logout(state){
        state.isLogin = false;
      },
      login(state){
        state.isLogin = true;
      },
      setMarks(state,{id,marks}){
        state.thisStudent.id=id;
        state.thisStudent.marks = marks;
      }

    }
  
});

export default store;
