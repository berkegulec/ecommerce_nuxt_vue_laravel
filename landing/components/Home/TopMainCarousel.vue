<template>
  <section class="section m-b-0">
    <div class="block block-sliders layout-9 nav-left auto-height m-b-0">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
        class=""
      >
        <Slide v-for="slide in 6" :key="slide" class="item">
          <div class="item-content" style="width: 100%;">
            <div class="item-info">
              <div class="content">
                <div class="content-wrap">
                  <h2 class="title-slider">It's Our <br />Anniversary!</h2>
                  <div class="description-slider">
                    Soft seats that welcome you home
                  </div>
                  <a
                    class="button-slider button-black"
                    href="shop-grid-left.html"
                    >SHOP NOW</a
                  >
                </div>
              </div>
            </div>
            <div class="content-image">
              <img
                width="959"
                height="963"
                src="media/slider/25.jpg"
                alt="Image Slider"
              />
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
const currentSlide = ref(0);
</script>

<style lang="scss" scoped></style>
