<template>
  <div class="products-topbar clearfix">
    <div class="products-topbar-left">
      <div class="products-count">Showing all {{ productListStore.productList.length }} results</div>
    </div>
    <div class="products-topbar-right">
      <div class="products-sort dropdown">
        <span class="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Default sorting</span>
        <ul class="sort-list dropdown-menu" x-placement="bottom-start">
          <li class="active">
            <a href="#">Default sorting</a>
          </li>
          <li><a href="#">Sort by popularity</a></li>
          <li><a href="#">Sort by average rating</a></li>
          <li><a href="#">Sort by latest</a></li>
          <li>
            <a href="#">Sort by price: low to high</a>
          </li>
          <li>
            <a href="#">Sort by price: high to low</a>
          </li>
        </ul>
      </div>
      <ul class="layout-toggle nav nav-tabs">
        <!-- Grid Listing -->
        <li class="nav-item">
          <a class="layout-grid nav-link cursor-pointer" :class="{ active: activeListingType == `grid` }"
            @click="productListStore.changeListingType('grid')">
            <span class="icon-column"><span class="layer first"><span></span><span></span><span></span></span><span
                class="layer middle"><span></span><span></span><span></span></span><span
                class="layer last"><span></span><span></span><span></span></span></span></a>
        </li>
        <!-- Row Listing -->
        <li class="nav-item">
          <a class="layout-list nav-link cursor-pointer" :class="{ active: activeListingType == `row` }"
            @click="productListStore.changeListingType('row')">
            <span class="icon-column"><span class="layer first"><span></span><span></span></span><span
                class="layer middle"><span></span><span></span></span><span
                class="layer last"><span></span><span></span></span></span></a>
        </li>
      </ul>
    </div>
  </div>

  <div class="tab-content">
    <div class="tab-pane fade show active" role="tabpanel">
      <ProductListRender />
    </div>
  </div>

  <nav class="pagination">
    <ul class="page-numbers">
      <li>
        <a class="prev page-numbers" href="#">Previous</a>
      </li>
      <li>
        <span aria-current="page" class="page-numbers current">1</span>
      </li>
      <li><a class="page-numbers" href="#">2</a></li>
      <li><a class="page-numbers" href="#">3</a></li>
      <li>
        <a class="next page-numbers" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useProductListStore } from "~~/stores/productListStore";
import ProductListRender from "./ProductListRender.vue";
const productListStore=useProductListStore();
const props = defineProps(["products"]);
const activeListingType = computed(() => productListStore.listingType);
</script>

<style lang="scss" scoped>

</style>
