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
                  <a class="active-login" href="#">Login</a>
                  <div class="form-login-register">
                    <div class="box-form-login">
                      <div class="active-login"></div>
                      <div class="box-content">
                        <div class="form-login active">
                          <form id="login_ajax" method="post" class="login">
                            <h2>Sign in</h2>
                            <p class="status"></p>
                            <div class="content">
                              <div class="username">
                                <input type="text" required="required" class="input-text" name="username" id="username"
                                  placeholder="Your name" />
                              </div>
                              <div class="password">
                                <input class="input-text" required="required" type="password" name="password"
                                  id="password" placeholder="Password" />
                              </div>
                              <div class="rememberme-lost">
                                <div class="rememberme">
                                  <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                  <label for="rememberme" class="inline">Remember me</label>
                                </div>
                                <div class="lost_password">
                                  <a href="forgot-password.html">Lost your password?</a>
                                </div>
                              </div>
                              <div class="button-login">
                                <input type="submit" class="button" name="login" value="Login" />
                              </div>
                              <div class="button-next-reregister">Create An Account</div>
                            </div>
                          </form>
                        </div>
                        <div class="form-register">
                          <form method="post" class="register">
                            <h2>REGISTER</h2>
                            <div class="content">
                              <div class="email">
                                <input type="email" class="input-text" placeholder="Email" name="email" id="reg_email"
                                  value="" />
                              </div>
                              <div class="password">
                                <input type="password" class="input-text" placeholder="Password" name="password"
                                  id="reg_password" />
                              </div>
                              <div class="button-register">
                                <input type="submit" class="button" name="register" value="Register" />
                              </div>
                              <div class="button-next-login">Already has an account</div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
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
import Cart from "./Cart.vue";
import { useWishlistStore } from "~~/stores/wishlistStore";
const route = useRoute();
const { navMenuStatus } = useMainStore();
const wishlistStore = useWishlistStore();
const wishlistCount = computed(() => wishlistStore.items.length);

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
