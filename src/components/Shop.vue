<template>
  <div class="shop">
    <div class="title-wrapper">
      <div class="title-inner">
        <h1>Tanning Products</h1>
      </div>
    </div>
    <TanSwiper />
  </div>
</template>

<script>
import TanSwiper from "./TanSwiper.vue";
import Vue from "vue";
Vue.use(TanSwiper);

export default {
  name: "Shop",
  components: {
    TanSwiper,
  },
};
</script>
<style lang="scss">
.shop {
  height: calc(100vh - 459px);
  flex-direction: column;
  background-color: whitesmoke;
}
.bv-example-row img {
  width: 300px;
}
.title-wrapper {
  width: 100%;
  position: relative;
  display: table;
  table-layout: fixed;
  //background-color: #dcc2b0;
  background-color: rgb(236, 227, 221);
  padding: 20px;
}
.title-inner {
  text-align: center;
}
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 32px;
}
@import "@/assets/css/palette.scss";
</style>