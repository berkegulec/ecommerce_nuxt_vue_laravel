<template>
  <div class="header-mobile">
    <div class="section-padding">
      <div class="section-container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
            <div class="navbar-header">
              <button
                type="button"
                id="show-megamenu"
                class="navbar-toggle"
              ></button>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
            <div class="site-logo">
              <a href="index9.html">
                <img
                  width="400"
                  height="79"
                  src="media/logo.png"
                  alt="Ruper – Furniture HTML Theme"
                />
              </a>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
            <div class="ruper-topcart dropdown">
              <div class="dropdown mini-cart top-cart">
                <div class="remove-cart-shadow"></div>
                <a
                  class="dropdown-toggle cart-icon"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="icons-cart">
                    <i class="icon-large-paper-bag"></i
                    ><span class="cart-count">2</span>
                  </div>
                </a>
                <div class="dropdown-menu cart-popup">
                  <div class="cart-empty-wrap">
                    <ul class="cart-list">
                      <li class="empty">
                        <span>No products in the cart.</span>
                        <a class="go-shop" href="shop-grid-left.html"
                          >GO TO SHOP<i
                            aria-hidden="true"
                            class="arrow_right"
                          ></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="cart-list-wrap">
                    <ul class="cart-list">
                      <li class="mini-cart-item">
                        <a href="#" class="remove" title="Remove this item"
                          ><i class="icon_close"></i
                        ></a>
                        <a href="shop-details.html" class="product-image"
                          ><img
                            width="600"
                            height="600"
                            src="media/product/3.jpg"
                            alt=""
                        /></a>
                        <a href="shop-details.html" class="product-name"
                          >Chair Oak Matt Lacquered</a
                        >
                        <div class="quantity">Qty: 1</div>
                        <div class="price">$150.00</div>
                      </li>
                      <li class="mini-cart-item">
                        <a href="#" class="remove" title="Remove this item"
                          ><i class="icon_close"></i
                        ></a>
                        <a href="shop-details.html" class="product-image"
                          ><img
                            width="600"
                            height="600"
                            src="media/product/1.jpg"
                            alt=""
                        /></a>
                        <a href="shop-details.html" class="product-name"
                          >Zunkel Schwarz</a
                        >
                        <div class="quantity">Qty: 1</div>
                        <div class="price">$100.00</div>
                      </li>
                    </ul>
                    <div class="total-cart">
                      <div class="title-total">Total:</div>
                      <div class="total-price"><span>$100.00</span></div>
                    </div>
                    <div class="free-ship">
                      <div class="title-ship">
                        Buy <strong>$400</strong> more to enjoy
                        <strong>FREE Shipping</strong>
                      </div>
                      <div class="total-percent">
                        <div class="percent" style="width: 20%"></div>
                      </div>
                    </div>
                    <div class="buttons">
                      <a
                        href="shop-cart.html"
                        class="button btn view-cart btn-primary"
                        >View cart</a
                      >
                      <a
                        href="shop-checkout.html"
                        class="button btn checkout btn-default"
                        >Check out</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-mobile-fixed">
      <!-- Shop -->
      <div class="shop-page">
        <a href="shop-grid-left.html"><i class="wpb-icon-shop"></i></a>
      </div>

      <!-- Login -->
      <div class="my-account">
        <div class="login-header">
          <a href="page-my-account.html"><i class="wpb-icon-user"></i></a>
        </div>
      </div>

      <!-- Search -->
      <div class="search-box">
        <div class="search-toggle">
          <i class="wpb-icon-magnifying-glass"></i>
        </div>
      </div>

      <!-- Wishlist -->
      <div class="wishlist-box">
        <a href="shop-wishlist.html"><i class="wpb-icon-heart"></i></a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
