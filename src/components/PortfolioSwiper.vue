<template>
  <div class="swiper-3d">
    <carousel-3d>
      <slide :index="0">
        <img
          src="../assets/images/stock/portrait_stock_bw.jpg"
          height="300px"
          width="300px"
        />
      </slide>
      <slide :index="1">
        <img
          src="../assets/images/stock/portrait_stock_bw.jpg"
          height="300px"
          width="300px"
        />
      </slide>
      <slide :index="2">
        <img
          src="../assets/images/stock/portrait_stock_bw.jpg"
          height="300px"
          width="300px"
        />
      </slide>
      <slide :index="3">
        <img
          src="../assets/images/stock/portrait_stock_bw.jpg"
          height="300px"
          width="300px"
        />
      </slide>
      <slide :index="4">
        <img
          src="../assets/images/stock/portrait_stock_bw.jpg"
          height="300px"
          width="300px"
        />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "swiper-example-navigation",
  title: "Navigation",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.swiper-3d {
  margin-bottom: 4rem;
}
</style>