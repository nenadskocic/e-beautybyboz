<template>
  <div id="navigation">
    <ul>
      <li><img src="../assets/images/logos/BbB-Circle-Logo-Digital.png" /></li>
      <router-link to="about"><li>About Us</li></router-link>
      <router-link to="team"><li>Our Team</li></router-link>
      <router-link to="services"><li>Services</li></router-link>
      <router-link to="shop"><li>Shop</li></router-link>
      <router-link to="contact"><li>Contact Us</li></router-link>
      <a
        href="https://www.instagram.com/beautybyboz/"
        target="_blank"
        class="fab fa-instagram fa-spin fa-2x"
      ></a>
      <a
        href="https://www.facebook.com/BeautybyBoz.BbB"
        target="_blank"
        class="fab fa-facebook fa-spin fa-2x"
      ></a>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation {
  display: flex;
  width: 100%;
  background-color: rgb(175, 174, 174);

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      font-size: 1.5rem;
      padding: 2px 10px;
      cursor: pointer;
      &:hover {
        color: lightgray;
      }
      display: block;
      img {
        width: 10rem;
      }
    }
    a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .fab {
      margin: 0 0 0 30px;
    }
    .fa-spin {
      animation: fa-spin 8s infinite linear !important;
    }
  }
}
</style>