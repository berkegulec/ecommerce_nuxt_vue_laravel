<template>
  <div class="header-desktop">
    <div class="header-wrapper">
      <div class="section-padding">
        <div class="section-container large p-l-r">
          <div class="row">
            <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
              <div class="site-logo">
                <NuxtLink to="">
                  <img width="400" height="79" src="http://caketheme.com/html/ruper/media/logo.png" alt="" />
                </NuxtLink>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
              <div class="site-navigation">
                <nav id="main-navigation">
                  <ul id="menu-main-menu" class="menu">
                    <li v-for="menu in menus" :key="menu.uri" class="level-0 menu-item"
                      :class="{ 'current-menu-item': parentIsActive(menu.uri) }">
                      <NuxtLink :to="menu.uri">
                        <span class="menu-item-text">{{ menu.name }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
              <div class="header-page-link">
                <!-- Login -->
                <div class="login-header">
                  <a class="active-login" v-if="!userData.isLogged">
                    <span class="cursor-pointer" style="color: #000;" @click="handleNavmenu('login', true)">Login</span>
                  </a>
                  <NuxtLink class="active-login" v-else to="/customer/dashboard">
                    <span class="cursor-pointer" style="color: #000;">My Account</span>
                  </NuxtLink>
                  <DesktopLoginPopup v-show="navMenuStatus.login" v-if="!userData.isLogged"
                    @close-trigger="handleNavmenu('login', false)" />
                </div>

                <!-- Search -->
                <div class="search-box" @click="navMenuStatus.search = !navMenuStatus.search">
                  <div class="search-toggle">
                    <i class="icon-search"></i>
                  </div>
                </div>

                <!-- Wishlist -->
                <div class="wishlist-box">
                  <a class="cursor-pointer" @click="navMenuStatus.wishlist = !navMenuStatus.wishlist"><i
                      class="icon-heart"></i></a>
                  <span class="count-wishlist">{{ wishlistCount }}</span>
                </div>

                <!-- Cart -->
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~~/stores/mainStore";

import Cart from "../../usual/Cart.vue";
import { useWishlistStore } from "~~/stores/wishlistStore";
import DesktopLoginPopup from "~~/components/usual/Desktop/LoginPopup.vue";
const route = useRoute();
const { navMenuStatus, handleNavmenu, customerData } = useMainStore();
const wishlistStore = useWishlistStore();
const wishlistCount = computed(() => wishlistStore.items.length);
const userData = computed(() => customerData);

const menus = [
  {
    name: "Homepage",
    uri: "/",
  },
  {
    name: "Shop",
    uri: "/products",
  },
  {
    name: "Contact",
    uri: "/contact",
  },
];

const parentIsActive = (input) => {
  const paths = Array.isArray(input) ? input : [input];
  return paths.some((path) => {
    return route.path === path; // current path starts with this path string
  });
};
</script>

<style lang="scss" scoped>

</style>
