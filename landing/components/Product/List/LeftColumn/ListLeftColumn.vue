<template>
  <!-- Block Product Categories -->
  <div class="block block-product-cats">
    <div class="block-title">
      <h2>Categories</h2>
    </div>
    <div class="block-content">
      <div class="product-cats-list">
        <ul>
          <li class="current">
            <a href="shop-grid-left.html">Bed & Bath <span class="count">9</span></a>
          </li>
          <li>
            <a href="shop-grid-left.html">Furniture <span class="count">4</span></a>
          </li>
          <li>
            <a href="shop-grid-left.html">Home Décor <span class="count">3</span></a>
          </li>
          <li>
            <a href="shop-grid-left.html">Lighting <span class="count">6</span></a>
          </li>
          <li>
            <a href="shop-grid-left.html">Office <span class="count">2</span></a>
          </li>
          <li>
            <a href="shop-grid-left.html">Outdoor <span class="count">4</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Block Product Filter -->
  <div class="block block-product-filter">
    <div class="block-title">
      <h2>Price</h2>
    </div>
    <div class="block-content">
      <div id="slider-range" class="price-filter-wrap">
        <div class="filter-item price-filter">
          <div class="layout-slider">
            <Slider
              v-model="priceRangeSlider.currentValue"
              :min="priceRangeSlider.min"
              :max="priceRangeSlider.max"
            />
          </div>
          <div class="layout-slider-settings"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Block Product Filter -->
  <div class="block block-product-filter clearfix">
    <div class="block-title">
      <h2>Size</h2>
    </div>
    <div class="block-content">
      <ul class="filter-items text">
        <li><span>L</span></li>
        <li><span>M</span></li>
        <li><span>S</span></li>
      </ul>
    </div>
  </div>

  <!-- Block Product Filter -->
  <div class="block block-product-filter clearfix">
    <div class="block-title">
      <h2>Brands</h2>
    </div>
    <div class="block-content">
      <ul class="filter-items image">
        <li>
          <span><img src="media/brand/1.jpg" alt="Brand" /></span>
        </li>
        <li>
          <span><img src="media/brand/2.jpg" alt="Brand" /></span>
        </li>
        <li>
          <span><img src="media/brand/3.jpg" alt="Brand" /></span>
        </li>
        <li>
          <span><img src="media/brand/4.jpg" alt="Brand" /></span>
        </li>
        <li>
          <span><img src="media/brand/5.jpg" alt="Brand" /></span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Block Products -->
  <div class="block block-products">
    <div class="block-title">
      <h2>Feature Product</h2>
    </div>
    <div class="block-content">
      <ul class="products-list">
        <li class="product-item">
          <a href="shop-details.html" class="product-image">
            <img src="media/product/6.jpg" />
          </a>
          <div class="product-content">
            <h2 class="product-title">
              <a href="shop-details.html"> Dining Table </a>
            </h2>
            <div class="rating small">
              <div class="star star-5"></div>
            </div>
            <span class="price">
              <del aria-hidden="true"><span>$150.00</span></del>
              <ins><span>$100.00</span></ins>
            </span>
          </div>
        </li>
        <li class="product-item">
          <a href="shop-details.html" class="product-image">
            <img src="media/product/8.jpg" />
          </a>
          <div class="product-content">
            <h2 class="product-title">
              <a href="shop-details.html"> Spinning Pendant Lamp </a>
            </h2>
            <div class="rating small">
              <div class="star star-0"></div>
            </div>
            <span class="price">$120.00</span>
          </div>
        </li>
        <li class="product-item">
          <a href="shop-details.html" class="product-image">
            <img src="media/product/9.jpg" />
          </a>
          <div class="product-content">
            <h2 class="product-title">
              <a href="shop-details.html"> Bora Armchair </a>
            </h2>
            <div class="rating small">
              <div class="star star-5"></div>
            </div>
            <span class="price">
              <del aria-hidden="true"><span>$200.00</span></del>
              <ins><span>$180.00</span></ins>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

const priceRangeSlider = ref({
  min: 0,
  max: 200,
  currentValue: 0,
});
</script>

<style lang="scss" scoped></style>
