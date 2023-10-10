
import './assets/main.css'

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store'; 

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  el: '#app',
  router,
  store, // Register the Vuex store
  render: (h) => h(App),
})
;
