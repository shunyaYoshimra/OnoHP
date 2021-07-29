import Vue from "vue";
import Router from "vue-router";
import Top from "../components/top.vue";
import Greet from "../components/greet.vue";
import Field from "../components/field.vue";
import Achievement from "../components/achievement.vue";
import Member from "../components/member.vue";
import ToNewcomer from "../components/toNewcomer.vue";
import VueRouter from "vue-router";


Vue.use(Router);

const routes = [
  { path: "/", component: Top },
  { path: "/greet", component: Greet },
  { path: "/field", component: Field },
  { path: "/achievement", component: Achievement },
  { path: "/member", component: Member },
  { path: "/tonewcomer", component: ToNewcomer }
]

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})