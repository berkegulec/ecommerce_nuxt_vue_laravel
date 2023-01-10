<template>
  <div class="row">
    <div class="col-md-12">
      <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" class="">
        <Slide v-for="slide in images" :key="slide">
          <div class="carousel__item">
            <img width="600" height="600" :src="slide" alt="" title="" />
          </div>
        </Slide>
        <template #addons>
          <navigation />
        </template>
      </Carousel>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 pt-2">
      <Carousel id="thumbnails" :items-to-show="3" :wrap-around="false" v-model="currentSlide" ref="carousel"
        class="image-thumbnail content-thumbnail-scroll" snap-align="center">
        <Slide v-for="(item,index) in images" :key="index">
          <div class="carousel__item" @click="slideTo(index - 1)">
            <img height="80" style="border-radius: 20px; height: 80px"
              :src="item" alt="" />
          </div>
        </Slide>
        <template #addons>
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps(['images']);
const currentSlide = ref(0);
function slideTo(val) {
  currentSlide.value = val;
}


</script>

<style scoped>
#thumbnails .carousel__item {
  height: 80px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
