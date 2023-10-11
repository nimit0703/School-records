import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard.vue"; // Import your views/components
import AddData from "@/views/AddData.vue";
import LoginPage from "@/views/LoginPage.vue";
// import Stats from '@/views/Stats.vue';
import StatsByMarks from "@/views/StatsByMarks.vue";
import StatsBySubjects from "@/views/StatsBySubjects.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Dashboard },
  { path: "/login", name: "login", component: LoginPage },
  { path: "/add-data", name: "add-data", component: AddData },
  { path: "/by-marks", name: "by-marks", component: StatsByMarks },
  { path: "/by-subjects", name: "by-subjects", component: StatsBySubjects },
  // Define more routes as needed
];

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes,
});

export default router;
