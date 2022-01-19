<template>
  <footer>
    <b-row id="top">BeautyByBoz | Stoney Creek, Ontario</b-row>
    <b-row>
      <img src="../assets/images/logos/BbB-Full-Logo-Digital.png" />
    </b-row>
    <b-row>
      <b-navbar id="footerNav">
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'contact' }"><p>Contact Us</p></b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item
            href="https://www.instagram.com/beautybyboz/"
            target="_blank"
          >
            Instagram
          </b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'about' }"><p>About Us</p></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </b-row>
    <b-row id="copyright">
      <p>©2021 BeautyByBoz</p>
    </b-row>
    <b-row id="ref">
      <p>
        Web design by
        <a href="https://www.enigmaly.ca" target="_blank">Enigmaly</a>
      </p>
    </b-row>
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
footer {
  background-color: rgb(175, 174, 174);
  font-weight: 500;
  border-radius: 30px;
  box-shadow: 0px -1px 0px rgba(50, 50, 50, 0.75);
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
  font-size: 1.25rem;
}
.row {
  justify-content: center;
  text-align: center;
  padding: 0;
  margin: 0;
}
img {
  width: 200px;
}
#footerNav {
  background-color: rgb(175, 174, 174);
  width: 100%;
  align-items: center;
  justify-content: center;
  .navbar-nav {
    justify-content: center;
  }
  .nav-item {
    p,
    a {
      font-size: 1.25rem;
    }
  }
}
#copyright {
  font-size: 1.25rem;
}
#ref {
  padding: 10px 0 10px 0;
  p, a {
    font-size: 1.25rem;
  }
}
</style>