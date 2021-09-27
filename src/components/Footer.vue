<template>
  <footer>
    <b-row id="top">BeautyByBoz | Stoney Creek, Ontario</b-row>
    <b-row>
      <img src="@/assets/images/logos/BbB-Circle-Logo-Digital.png" />
    </b-row>
    <b-row>
      <b-navbar id="footerNav">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'contact' }">Contact Us</b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item>
            <a href="https://www.instagram.com/beautybyboz/">Instagram</a>
          </b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'about' }">About Us</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-row>
    <b-row>
      <p>©2021 BeautyByBoz</p>
    </b-row>
    <b-row>
      <p>Web design by <a href="http://www.enigmaly.ca">Enigmaly</a></p>
    </b-row>
  </footer>
</template>
<script></script>
<style lang="scss">
@import "@/assets/css/palette.scss";

footer {
  background-color: lightgray;
}
#top {
  font-size: 18px;
}
.row {
  justify-content: center;
  text-align: center;
  padding: 0.5%;
}
.row img {
  width: 150px;
}
.navbar-nav {
  justify-content: center;
}
.nav-item {
  font-size: 18px;
}
#footerNav {
  background-color: lightgray;
  padding-top: 0;
  height: 10%;
}
</style>
