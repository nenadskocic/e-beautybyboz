
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
import VueMq from 'vue-mq';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMq, { breakpoints: { phone: 450, laptop: 1250, desktop: Infinity, }, defaultBreakpoint: 'phone'})

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
