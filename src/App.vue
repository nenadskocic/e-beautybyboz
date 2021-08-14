
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
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style>
</style>
