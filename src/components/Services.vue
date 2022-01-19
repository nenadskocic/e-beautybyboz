<template>
  <div class="services">
    <div class="title-wrapper">
      <div class="title-inner">
        <h1>Services</h1>
      </div>
    </div>
    <div class="grid-ish">
      <div class="col">
        <span id="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
          magni alias odio consequatur voluptatem, dignissimos nisi natus
          obcaecati iusto voluptatum at amet exercitationem sed pariatur maiores
          fugit rem? Cupiditate.
        </span>
      </div>
      <div class="col">
        <p id="img">
          <img
            src="../assets/images/stock/portrait_stock_blank.png"
            height="500px"
            width="500px"
          />
        </p>
      </div>
      <div class="col">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eos
          illum voluptas voluptatibus quos magnam quia doloremque optio, numquam
          cumque provident soluta saepe culpa aliquid aspernatur quasi quas
          eveniet beatae.
        </span>
      </div>
      <div class="col">
        <p id="img">
          <img
            src="../assets/images/stock/portrait_stock_blank.png"
            height="500px"
            width="500px"
          />
        </p>
      </div>
      <div class="col">
        <span id="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
          magni alias odio consequatur voluptatem, dignissimos nisi natus
          obcaecati iusto voluptatum at amet exercitationem sed pariatur maiores
          fugit rem? Cupiditate.
        </span>
      </div>
      <div class="col">
        <p id="img">
          <img
            src="../assets/images/stock/portrait_stock_blank.png"
            height="500px"
            width="500px"
          />
        </p>
      </div>
      <div class="col">
        <span id="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa
          magni alias odio consequatur voluptatem, dignissimos nisi natus
          obcaecati iusto voluptatum at amet exercitationem sed pariatur maiores
          fugit rem? Cupiditate.
        </span>
      </div>
      <div class="col">
        <p id="img">
          <img
            src="../assets/images/stock/portrait_stock_blank.png"
            height="500px"
            width="500px"
          />
        </p>
      </div>
    </div>
    <div>
      <h1>Portfolio</h1>
      <PortfolioSwiper />
    </div>
  </div>
</template>

<script>
import PortfolioSwiper from "./PortfolioSwiper.vue";
import Vue from "vue";
Vue.use(PortfolioSwiper);

export default {
  name: "Team",
  components: {
    PortfolioSwiper,
  },
};
</script>

<style lang="scss" scoped>
.services {
  background-color: rgb(175, 174, 174);
  min-height: 100vh;

  .title-wrapper {
    width: 100%;
    position: relative;
    display: table;
    table-layout: fixed;
    background-color: rgb(139, 139, 139);
    border-radius: 30px;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.2);
    padding: 20px;
    .title-inner {
      text-align: center;
    }
  }
  .grid-ish {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 2rem 0;
    .col {
      margin-bottom: 2rem;
    }
    #bio {
      font-style: italic;
    }
    span {
      font-size: 1.5rem;
    }
    #img {
      img {
        max-width: 100%;
        border-radius: 30px;
        box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .grid-ish > * {
    flex: 1 1 25em;
  }
}
</style>