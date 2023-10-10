// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
      isLogin:true,
    },
    mutations:{
      logout(state){
        state.isLogin = false;
      },
      login(state){
        state.isLogin = true;
      },

    }
  
});

export default store;
