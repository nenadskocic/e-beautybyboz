<template>
  <div id="navigation-mobile">
    <ul>
      <li><img src="../assets/images/logos/BbB-Circle-Logo-Digital.png" /></li>
      <router-link to="about"><li>About Us</li></router-link>
      <router-link to="team"><li>Our Team</li></router-link>
      <router-link to="services"><li>Services</li></router-link>
      <router-link to="shop"><li>Shop</li></router-link>
      <router-link to="contact"><li>Contact Us</li></router-link>
    </ul>
    <div class="social-media">
      <a
        href="https://www.instagram.com/beautybyboz/"
        target="_blank"
        class="fab fa-instagram fa-2x"
      ></a>
      <a
        href="https://www.facebook.com/BeautybyBoz.BbB"
        target="_blank"
        class="fab fa-facebook fa-2x"
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

#navigation-mobile {
  padding: 20px 0 0 0;
  height: 100vh;

  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
    li {
      color: black;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #111;
      }
      img {
        width: 10rem;
      }
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .social-media {
    position: absolute;
    left: 40px;
    bottom: 20px;
    a {
      margin: 0 40px 0 0;
      color: black;
    }
    .fab {
      text-decoration: none;
      color: black;
    }
  }
}
</style>