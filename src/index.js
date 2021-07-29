import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import img from "../assets/top-image.png"

new Vue({
  el: "#app",
  router,
  img,
  render: h => h(App)
})

