<template>
  <div id="page" class="hfeed page-wrapper">
    <!-- Header -->
    <Header />
    <!-- /Header -->

    <!-- Main -->
    <div id="site-main" class="site-main">
      <div id="main-content" class="main-content">
        <div id="primary" class="content-area">
          <slot />

          <!-- #content -->
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
  <QuickView />
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
</script>

<style lang="scss" scoped></style>
