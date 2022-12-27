<template>
  <section class="section section-padding m-b-70">
    <div class="section-container large">
      <!-- Block Products -->
      <div class="block block-products loadmore">
        <div class="block-widget-wrap">
          <div class="block-title"><h2>Latest Products</h2></div>
          <div class="block-content">
            <div class="products-list grid">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6" v-for="(item, index) in 8" :key="index">
                  <ProductCardPreview />
                </div>
              </div>
            </div>
            <!-- Load More -->
            <LoadMore :loading="false" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import LoadMore from "~~/components/usual/LoadMore.vue";
import ProductCardPreview from "./ProductCardPreview.vue";
</script>

<style lang="scss" scoped></style>
