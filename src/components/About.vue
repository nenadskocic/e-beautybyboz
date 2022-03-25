<template>
  <div class="about">
    <div class="grid-ish">
      <div class="col">
        <span id="bio">
          "When I can transform how someone sees themselves and make them feel
          beautiful... That is what this career is all about. Showing people the
          beauty that lies within each one of them." - Daniela
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
          BeautybyBoz strives to provide clients with a welcoming environment
          where individuals feel comfortable and confident in both the products
          and services provided. With many years of experience in the customer
          service industry we have received the opportunity to put together a
          team that is positive, welcoming and creative. Our Team's values are
          to provide clients with a service that is affordable yet does not
          alter the quality of work and products that are being used.
        </span>
      </div>
      <div class="col">
        <p id="img">
          <img
            src="../assets/images/stock/portrait_stock_bw.jpg"
            height="500px"
            width="500px"
          />
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.about {
  background-color: whitesmoke;
  min-height: 100vh;

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
    flex: 1 1 30em;
  }
}
</style>