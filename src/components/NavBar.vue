<template>
  <div>
    <mq-layout mq="tablet+">
      <div>
        <b-navbar>
          <b-navbar-nav id="topNav">
            <div>
              <b-navbar-nav>
                <b-navbar-brand href="#">
                  <img src="../assets/images/logos/BbB-Full-Logo-Digital.png" />
                </b-navbar-brand>
              </b-navbar-nav>
            </div>
          </b-navbar-nav>
        </b-navbar>
        <b-navbar type="dark" toggleable="lg" id="bottomNav">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-nav>
            <b-navbar-nav class="m-auto">
              <b-nav-item :to="{ name: 'about' }" class="m-auto"
                ><p>About Us</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
              <b-nav-item :to="{ name: 'testimonals' }" class="m-auto"
                ><p>Testimonals</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
              <b-nav-item :to="{ name: 'team' }" class="m-auto"
                ><p>Our Team</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'services' }" class="m-auto"
                ><p>Services</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
              <b-nav-item :to="{ name: 'shop' }" class="m-auto"
                ><p>Shop</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
              <b-nav-item :to="{ name: 'contact' }" class="m-auto"
                ><p>Contact Us</p></b-nav-item
              >
              <b-nav-item>
                <div>|</div>
              </b-nav-item>
              <b-nav-item href="https://www.facebook.com/BeautybyBoz.BbB">
                <b-icon icon="facebook"></b-icon>
              </b-nav-item>
              <b-nav-item href="https://www.instagram.com/beautybyboz/">
                <b-icon icon="instagram"></b-icon>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </mq-layout>
    <mq-layout mq="mobile">
      <slider
        :width="300"
        format="push"
        direction="left"
        :opacity="0.15"
        :links="[
          { id: 1, text: 'Link 1', url: 'https://github.com' },
          { id: 2, text: 'Link 2', url: 'https://github.com' },
        ]"
      ></slider>
    </mq-layout>
  </div>
</template>
<script>
import Slider from "@jeremyhamm/vue-slider";

export default {
  components: {
    slider: Slider,
  },
  mounted() {
    console.log(this.$mq);
  },
};
</script>
<style scoped>
@media (min-width: 1366px) {
  .navbar {
    background-color: whitesmoke;
    position: relative;
  }
  #topNav {
    height: 100px;
  }
  #bottomNav {
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 50px;
    font-size: 18px;
    padding-bottom: 20px;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: gray !important;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
  }
  .nav-item p:hover {
    color: black !important;
  }
  .navbar-brand img {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .navbar .nav-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  .nav-link svg {
    color: black !important;
  }
}
</style>