<template>
  <div id="navigation">
    <div class="container">
      <ul>
        <div>
          <li>
            <img src="../assets/images/logos/BbB-Circle-Logo-Digital.png" />
          </li>
        </div>

        <router-link to="about"><li class="btn btn-2">About</li></router-link>
        <router-link to="team"><li class="btn btn-2">Our Team</li></router-link>
        <router-link to="services"
          ><li class="btn btn-2">Services</li></router-link
        >
        <router-link to="shop"><li class="btn btn-2">Shop</li></router-link>
        <router-link to="contact"
          ><li class="btn btn-2">Contact Us</li></router-link
        >
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
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation {
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: whitesmoke;
  list-style: none;
  display: -webkit-box;
  display: flex;

  ul {
    display: flex;
    list-style: none;
    overflow: hidden;

    li {
      font-size: 1.5rem;
      font-weight: 500;

      cursor: pointer;

      img {
        width: 10em;
        margin-right: 2.5em;
      }
    }
    a {
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        margin-top: 45px;
      }
    }
    .fab {
      margin: 0 0 0 30px;
    }
  }
}

.container > div {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 20px;
  flex-basis: 20px;

  -webkit-flex-grow: 1;
  -webkit-flex-shrink: 1;

  margin: 15px;
  overflow: hidden;
}

$black: #000;

* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.btn {
  color: #000;
  cursor: pointer;
  // display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    text-decoration: none;
  }
}

.btn-2 {
  letter-spacing: 0;
}

.btn-2:hover,
.btn-2:active {
  letter-spacing: 5px;
}

.btn-2:after,
.btn-2:before {
  backface-visibility: hidden;
  border: 1px solid rgba(#000, 0);
  bottom: 0px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  transition: all 280ms ease-in-out;
  width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
  backface-visibility: hidden;
  border-color: #000;
  transition: width 350ms ease-in-out;
  width: 70%;
}

.btn-2:hover:before {
  bottom: auto;
  top: 0;
  width: 70%;
}
</style>