<template>
  <div class="products-list grid" v-if="isGrid">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6" v-for="(product, index) in currentProductList" :key="product.id">
        <div class="products-entry clearfix product-wapper">
          <div class="products-thumb">
            <div class="product-lable">
              <div class="hot">Hot</div>
            </div>
            <div class="product-thumb-hover">
              <NuxtLink :to="productLink(product)">
                <img width="600" height="600" :src="product.thumbnail" class="post-image" alt="" />
                <img width="600" height="600" :src="product.images[1]" class="hover-image back" alt="" />
              </NuxtLink>
            </div>
            <div class="product-button">
              <div class="btn-add-to-cart" data-title="Add to cart">
                <a class="product-btn button cursor-pointer" @click="addCart(product.id)">Add to cart</a>
              </div>
              <div class="btn-wishlist" data-title="Wishlist">
                <button class="product-btn" @click="addWishlist(product.id)">Add to wishlist</button>
              </div>
              <div class="btn-compare" data-title="Compare">
                <button class="product-btn">Compare</button>
              </div>
              <span class="product-quickview" data-title="Quick View">
                <a href="#" class="quickview quickview-button">Quick View <i class="icon-search"></i></a>
              </span>
            </div>
          </div>
          <div class="products-content">
            <div class="contents text-center">
              <h3 class="product-title">
                <NuxtLink :to="productLink(product)">{{ product.title }}</NuxtLink>
              </h3>
              <span class="price">${{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="products-list list" v-else>
    <div class="products-entry clearfix product-wapper" v-for="(product, index) in currentProductList"
      :key="product.id">
      <div class="row">
        <div class="col-md-4">
          <div class="products-thumb">
            <div class="product-lable">
              <div class="hot">Hot</div>
            </div>
            <div class="product-thumb-hover">
              <NuxtLink :to="productLink(product)">
                <img width="600" height="600" :src="product.thumbnail" class="post-image" alt="" />
                <img width="600" height="600" :src="product.images[1]" class="hover-image back" alt="" />
              </NuxtLink>
            </div>
            <span class="product-quickview" data-title="Quick View">
              <a href="#" class="quickview quickview-button">Quick View <i class="icon-search"></i></a>
            </span>
          </div>
        </div>
        <div class="col-md-8">
          <div class="products-content">
            <h3 class="product-title">
              <a href="shop-details.html">Dining Table</a>
            </h3>
            <span class="price">${{ product.price }}</span>
            <div class="rating">
              <div class="star star-5"></div>
              <div class="review-count">(1<span> review</span>)</div>
            </div>
            <div class="product-button">
              <div class="btn-add-to-cart" data-title="Add to cart">
                <a class="product-btn button cursor-pointer" @click="addCart(product.id)">Add to cart</a>
              </div>
              <div class="btn-wishlist" data-title="Wishlist">
                <button class="product-btn" @click="addWishlist(product.id)">Add to wishlist</button>
              </div>
              <div class="btn-compare" data-title="Compare">
                <button class="product-btn">Compare</button>
              </div>
            </div>
            <div class="product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis…
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { product_link_generator } from '~~/utils/slugify_generator.js'
import { useProductListStore } from "~~/stores/productListStore";
import { useCartStore } from "~~/stores/cartStore";
import { useWishlistStore } from "~~/stores/wishlistStore";
import { useMainStore } from "~~/stores/mainStore";
const productStore = useProductListStore();
const mainStore = useMainStore();
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const isGrid = computed(() => productStore.listingType == "grid");
const productLink = (item) => product_link_generator(item.title, item.id);
const currentProductList = computed(() => productStore.productList);

const addCart = async (id) => await cartStore.addItemToCart(id);
const addWishlist = async (id) => (await wishlistStore.addItemToWishlist(id).then(() => mainStore.navMenuStatus.wishlist = true));
</script>

<style lang="scss" scoped>

</style>
