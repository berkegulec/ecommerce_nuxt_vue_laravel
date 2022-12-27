<template>
  <div class="items">
    <div class="products-entry clearfix product-wapper">
      <div class="products-thumb">
        <div class="product-lable">
          <div class="hot">Hot</div>
        </div>
        <div class="product-thumb-hover">
          <NuxtLink to="/products/123">
            <img
              width="600"
              height="600"
              src="media/product/6.jpg"
              class="post-image"
              alt=""
            />
            <img
              width="600"
              height="600"
              src="media/product/6-2.jpg"
              class="hover-image back"
              alt=""
            />
          </NuxtLink>
        </div>
        <div class="product-button">
          <div class="btn-add-to-cart" data-title="Add to cart">
            <a rel="nofollow" href="#" class="product-btn button"
              >Add to cart</a
            >
          </div>
          <div class="btn-wishlist" data-title="Wishlist">
            <button class="product-btn">Add to wishlist</button>
          </div>
          <div class="btn-compare" data-title="Compare">
            <button class="product-btn">Compare</button>
          </div>
          <span class="product-quickview" data-title="Quick View">
            <a href="#" class="quickview quickview-button"
              >Quick View <i class="icon-search"></i
            ></a>
          </span>
        </div>
      </div>
      <div class="products-content">
        <div class="contents text-center">
          <h3 class="product-title">
            <NuxtLink to="/products/123">Dining Table</NuxtLink>
          </h3>
          <span class="price">$150.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
