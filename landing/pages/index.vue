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
    { src: "/js/tmpl.js" },
    {
      src: "/js/jquery.dependClass-0.1.js",
    },
    { src: "/js/draggable-0.1.js" },
    { src: "/js/jquery.slider.js" },
    {
      src: "/js/jquery.elevatezoom.js",
    },
  ],
});
</script>

<style lang="scss" scoped>

</style>
