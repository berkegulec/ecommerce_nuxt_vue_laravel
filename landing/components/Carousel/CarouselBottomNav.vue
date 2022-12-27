<template>
  <Carousel
    id="gallery"
    :items-to-show="1"
    :wrap-around="false"
    v-model="currentSlide"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <img
          width="900"
          height="900"
          src="http://127.0.0.1:8000/vendor/media/product/9.jpg"
          alt=""
          title=""
        />
      </div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">
        <span class="img-thumbnail-scroll">
          <img width="600" height="600" src="http://127.0.0.1:8000/vendor/media/product/9-2.jpg" alt="" />
        </span>
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>
