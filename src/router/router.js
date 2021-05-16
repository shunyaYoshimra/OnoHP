import Vue from "vue";
import Router from "vue-router";
import Top from "../components/top.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Top }
]

const router = new Router({
  routes
})

export default router;