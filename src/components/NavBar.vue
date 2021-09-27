<template>
  <div>
    <b-navbar type="dark" toggleable="lg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav>
        <b-navbar-nav class="mx-auto" id="left">
          <b-nav-item :to="{ name: 'about' }" class="mx-auto"
            >About Us</b-nav-item
          >
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'testimonals' }" class="mx-auto"
            >Testimonals</b-nav-item
          >
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'team' }" class="mx-auto"
            >Our Team</b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto" id="middle">
          <b-navbar-brand href="#">
            <img src="@/assets/images/logos/BbB-Full-Logo-Digital.png" />
          </b-navbar-brand>
        </b-navbar-nav>
        <b-navbar-nav class="mx-auto" id="right">
          <b-nav-item :to="{ name: 'services' }" class="mx-auto"
            >Services</b-nav-item
          >
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'shop' }" class="mx-auto">Shop</b-nav-item>
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item :to="{ name: 'contact' }" class="mx-auto"
            >Contact Us</b-nav-item
          >
          <b-nav-item>
            <div class="v1">|</div>
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="facebook"></b-icon>
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="instagram"></b-icon>
          </b-nav-item>
          <b-nav-item>
            <b-icon icon="twitter"></b-icon>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
</script>
<style lang="scss">
@import "@/assets/css/palette.scss";

.navbar {
  background-color: whitesmoke;
  position: relative;
}
.navbar-nav {
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.navbar-dark .navbar-nav .nav-link {
  color: black !important;
}
/*
.navbar-brand {
  transform: translateX(-50%);
  left: 50%;
  position: absolute;
}
*/
.navbar-brand img {
  width: 300px;
}
.navbar .nav-item {
  font-size: 18px;
}
.navbar-dark .navbar-nav .nav-link .v1 {
  color: gray;
}
</style>