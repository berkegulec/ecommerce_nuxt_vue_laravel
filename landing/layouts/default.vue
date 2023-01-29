<template>
  <div id="page" class="hfeed page-wrapper" :class="{ 'opacity-style': navMenuStatus.search }">
    <!-- Header -->
    <Header />
    <!-- /Header -->

    <!-- Main -->
    <div id="site-main" class="site-main">
      <div id="main-content" class="main-content">
        <div id="primary" class="content-area">
          <slot />

        </div>
        <!-- #primary -->
      </div>
      <!-- #main-content -->
    </div>

    <!-- /Main -->

    <!-- Footer -->
    <Footer />
    <!-- /Footer -->
  </div>

  <!-- Back Top button -->
  <BackTopButton />
  <!-- Search -->
  <Search />
  <!-- Wishlist -->
  <Wishlist />
  <!-- Compare -->
  <Compare />
  <!-- Quickview -->
  <QuickView v-if="navMenuStatus.quickView" @close-trigger="closeQuickview()" />
  <!-- Page Loader -->
  <PageLoader />
</template>

<script setup>
import Footer from "~~/components/Template/Footer.vue";
import Header from "~~/components/Template/Header/index.vue";
import BackTopButton from "~~/components/usual/BackTopButton.vue";
import Compare from "~~/components/usual/Compare.vue";
import PageLoader from "~~/components/usual/PageLoader.vue";
import QuickView from "~~/components/usual/QuickView.vue";
import Search from "~~/components/usual/Search.vue";
import Wishlist from "~~/components/usual/Wishlist.vue";
import { useMainStore } from "~~/stores/mainStore";

const { navMenuStatus } = useMainStore();

const closeQuickview = () => {
  navMenuStatus.quickView = false
}
</script>

<style lang="scss" scoped>

</style>
