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
<style lang="scss" scoped>
.shop {
  flex-direction: column;
  background-color: whitesmoke;
  margin-bottom: 2rem;

  .title-wrapper {
    width: 100%;
    position: relative;
    display: table;
    table-layout: fixed;
    background-color: lightgray;
    border-radius: 30px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.2);
    padding: 20px;

    .title-inner {
      text-align: center;
      h1 {
        font-size: 2.5rem;
      }
    }
  }
}
.bv-example-row img {
  width: 300px;
}
</style>