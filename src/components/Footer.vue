<template>
  <footer>
    <b-row id="top">BeautyByBoz | Stoney Creek, Ontario</b-row>
    <b-row>
      <img src="../assets/images/logos/BbB-Circle-Logo-Digital.png" />
    </b-row>
    <b-row>
      <b-navbar id="footerNav">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'contact' }"><p>Contact Us</p></b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item href="https://www.instagram.com/beautybyboz/">
            Instagram
          </b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'about' }"><p>About Us</p></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-row>
    <b-row>
      <p>©2021 BeautyByBoz</p>
    </b-row>
    <b-row id="ref">
      <p>Web design by <a href="https://www.enigmaly.ca">Enigmaly</a></p>
    </b-row>
  </footer>
</template>
<script></script>
<style scoped>
footer {
  background-color: whitesmoke;
  font-weight: 500;
}
footer a {
  text-decoration: none;
  color: gray !important;
}
footer a:hover {
  text-decoration: none;
  color: black !important;
}
footer p:hover {
  color: black !important;
}
#top {
  font-size: 18px;
  padding: 10px 0 10px 0;
}
.row {
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
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
  background-color: whitesmoke;
  width: 100%;
  align-items: center;
  justify-content: center;
}
#ref {
  padding: 10px 0 10px 0;
}
</style>
