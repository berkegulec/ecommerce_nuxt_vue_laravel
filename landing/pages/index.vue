<template>
  <!-- Block Sliders -->
  <PageContent>

    <TopMainCarousel />

    <!-- Block Product Categories -->
    <TopProductCategCarousel />

    <!-- Block Products -->
    <MiddleBlockProducts />

    <!-- Block Banners &  Block Posts -->
    <BottomPostCarousel />

    <!-- Block Image -->

    <BottomBrandsCarousel />
  </PageContent>

</template>

<script setup>
import BottomBrandsCarousel from '~~/components/Home/BottomBrandsCarousel.vue';
import BottomPostCarousel from '~~/components/Home/BottomPostCarousel.vue';
import MiddleBlockProducts from '~~/components/Home/MiddleBlockProducts.vue';
import TopMainCarousel from '~~/components/Home/TopMainCarousel.vue';
import TopProductCategCarousel from '~~/components/Home/TopProductCategCarousel.vue';
import PageContent from '~~/components/Template/PageContent.vue';



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

<style lang="scss" scoped>

</style>
