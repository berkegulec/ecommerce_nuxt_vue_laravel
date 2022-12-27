<template>
  <!-- Block Sliders -->
  <TopMainCarousel />

  <!-- Block Product Categories -->
  <TopProductCategCarousel />

  <!-- Block Products -->
  <MiddleBlockProducts />

  <!-- Block Banners &  Block Posts -->
  <BottomPostCarousel />

  <!-- Block Image -->

  <BottomBrandsCarousel />
</template>

<script setup>
import BottomBrandsCarousel from "~~/components/Carousel/BottomBrandsCarousel.vue";
import BottomPostCarousel from "~~/components/Carousel/BottomPostCarousel.vue";
import MiddleBlockProducts from "~~/components/Carousel/MiddleBlockProducts.vue";
import TopMainCarousel from "~~/components/Carousel/TopMainCarousel.vue";
import TopProductCategCarousel from "~~/components/Carousel/TopProductCategCarousel.vue";


definePageMeta({
  layout: "default",
});
useHead({
  script: [
    { src: "http://127.0.0.1:8000/vendor/libs/slider/js/tmpl.js" },
    {
      src: "http://127.0.0.1:8000/vendor/libs/slider/js/jquery.dependClass-0.1.js",
    },
    { src: "http://127.0.0.1:8000/vendor/libs/slider/js/draggable-0.1.js" },
    { src: "http://127.0.0.1:8000/vendor/libs/slider/js/jquery.slider.js" },
    {
      src: "http://127.0.0.1:8000/vendor/libs/elevatezoom/js/jquery.elevatezoom.js",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
