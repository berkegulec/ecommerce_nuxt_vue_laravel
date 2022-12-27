<template>
  <div class="quickview-popup">
    <div id="quickview-container">
      <div class="quickview-container">
        <a href="#" class="quickview-close"></a>
        <div class="quickview-notices-wrapper"></div>
        <div class="product single-product product-type-simple">
          <div class="product-detail">
            <div class="row">
              <div class="img-quickview">
                <div class="product-images-slider">
                  <div id="quickview-slick-carousel">
                    <div class="images">
                      <div class="scroll-image">
                        <div class="slick-wrap">
                          <div
                            class="slick-sliders image-additional"
                            data-dots="true"
                            data-columns4="1"
                            data-columns3="1"
                            data-columns2="1"
                            data-columns1="1"
                            data-columns="1"
                            data-nav="true"
                          >
                            <div class="img-thumbnail slick-slide">
                              <a
                                href="media/product/3.jpg"
                                class="image-scroll"
                                title=""
                              >
                                <img
                                  width="900"
                                  height="900"
                                  src="media/product/3.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div class="img-thumbnail slick-slide">
                              <a
                                href="media/product/3-2.jpg"
                                class="image-scroll"
                                title=""
                              >
                                <img
                                  width="900"
                                  height="900"
                                  src="media/product/3-2.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quickview-single-info">
                <div class="product-content-detail entry-summary">
                  <h1 class="product-title entry-title">
                    Chair Oak Matt Lacquered
                  </h1>
                  <div class="price-single">
                    <div class="price">
                      <del><span>$150.00</span></del>
                      <span>$100.00</span>
                    </div>
                  </div>
                  <div class="product-rating">
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 4.00 out of 5"
                    >
                      <span style="width: 80%"
                        >Rated <strong class="rating">4.00</strong> out of 5
                        based on <span class="rating">1</span> customer
                        rating</span
                      >
                    </div>
                    <a href="#" class="review-link"
                      >(<span class="count">1</span> customer review)</a
                    >
                  </div>
                  <div class="description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore…
                    </p>
                  </div>
                  <form
                    class="cart"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <div class="quantity-button">
                      <div class="quantity">
                        <button type="button" class="plus">+</button>
                        <input
                          type="number"
                          class="input-text qty text"
                          step="1"
                          min="1"
                          max=""
                          name="quantity"
                          value="1"
                          title="Qty"
                          size="4"
                          placeholder=""
                          inputmode="numeric"
                          autocomplete="off"
                        />
                        <button type="button" class="minus">-</button>
                      </div>
                      <button
                        type="submit"
                        class="single-add-to-cart-button button alt"
                      >
                        Add to cart
                      </button>
                    </div>
                    <button class="button quick-buy">Buy It Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
