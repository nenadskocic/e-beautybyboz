
<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Vue from "vue";
import "./assets/css/styles.scss";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueMq from "vue-mq";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMq, {
  breakpoints: { mobile: 450, tablet: 900, laptop: 1250, desktop: Infinity },
  defaultBreakpoint: "mobile",
});
Vue.use(VueAwesomeSwiper);

export default {
  name: "app",
  components: {
    NavBar,
    Footer,
  },
};
</script>
