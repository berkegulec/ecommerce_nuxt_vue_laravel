<template>
  <section class="section section-padding p-t-20 m-b-20">
    <div class="section-container">
      <div class="block block-image slider">
        <div class="block-widget-wrap">
          <div class="slick-wrap">
            <Carousel
              id="gallery"
              :items-to-show="5"
              :wrap-around="true"
              v-model="currentSlide"
              class=""
            >
              <Slide v-for="slide in 3" :key="slide">
                <div class="item">
                  <div class="item-image">
                    <a href="#">
                      <img
                        width="450"
                        height="450"
                        src="media/brand/1.jpg"
                        alt="Brand 1"
                      />
                    </a>
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
  </section>
</template>

<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';

</script>

<style lang="scss" scoped></style>
