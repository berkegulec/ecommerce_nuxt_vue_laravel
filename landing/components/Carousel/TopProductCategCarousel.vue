<template>
  <!-- Carousel Has Error while sliding release click redirect TODO! -->
  <section class="section section-padding background-6 p-t-70 p-b-80 m-b-70">
    <div class="section-container">
      <div class="block block-product-cats slider round-border">
        <div class="block-widget-wrap">
          <div class="block-title"><h2>Our Collection</h2></div>
          <div class="block-content">
            <div class="product-cats-list slick-wrap">
              <Carousel
                id="gallery"
                :items-to-show="5"
                :wrap-around="true"
                v-model="currentSlide"
                class=""
              >
                <Slide v-for="slide in 6" :key="slide">
                  <div class="item item-product-cat">
                    <div class="item-product-cat-content">
                      <a href="shop-grid-left.html">
                        <div class="item-image">
                          <img
                            width="258"
                            height="258"
                            src="media/product/cat-1.jpg"
                            alt="bed-bath"
                          />
                        </div>
                      </a>
                      <div class="product-cat-content-info">
                        <h2 class="item-title">
                          <a href="shop-grid-left.html">Bed & Bath</a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </Slide>
                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
const currentSlide = ref(0);
</script>

<style scoped>
#gallery img {
  width: 258;
}
</style>
