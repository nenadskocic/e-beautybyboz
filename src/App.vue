
<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Vue from "vue";
import "./assets/css/palette.scss";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueMq from "vue-mq";
import VueCarousel from "vue-carousel";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMq, {
  breakpoints: { phone: 450, laptop: 1250, desktop: Infinity },
  defaultBreakpoint: "phone",
});
Vue.use(VueCarousel);
Vue.use(VueAwesomeSwiper);

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
</style>
