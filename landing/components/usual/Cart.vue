<template>
  <div class="ruper-topcart dropdown light">
    <div class="dropdown mini-cart top-cart">
      <div class="remove-cart-shadow"></div>
      <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false">
        <div class="icons-cart">
          <i class="icon-large-paper-bag"></i><span class="cart-count">{{ storeItems.length }}</span>
        </div>
      </a>
      <div class="dropdown-menu cart-popup">
        <div class="cart-empty-wrap" v-if="!storeItems.length">
          <ul class="cart-list">
            <li class="empty">
              <span>No products in the cart.</span>
              <NuxtLink class="go-shop" to="/products">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="cart-list-wrap" v-else>
          <ul class="cart-list">
            <li class="mini-cart-item" v-for="(item, index) in cartStore.items" :key="index">
              <a class="remove cursor-pointer" title="Remove this item" @click="cartStore.removeItemFromCart(item.id)">
                <i class="icon_close"></i>
              </a>
              <a href="shop-details.html" class="product-image"><img width="600" height="600" :src="item.img" alt=""
                  style="width: 70px;height: 70px;" /></a>
              <a href="shop-details.html" class="product-name">{{ item.name }}</a>
              <div class="quantity">Qty: {{ item.qty }} {{ item.qty > 1 ? ` x $${item.price}` : `` }}</div>
              <div class="price">${{ item.price * item.qty }}</div>
            </li>
          </ul>
          <div class="total-cart">
            <div class="title-total">Total:</div>
            <div class="total-price">
              <span>${{ cartTotal }}</span>
            </div>
          </div>
          <div class="free-ship">
            <div class="title-ship">
              Buy <strong>$400</strong> more to enjoy
              <strong>FREE Shipping</strong>
            </div>
            <div class="total-percent">
              <div class="percent" style="width: 20%"></div>
            </div>
          </div>
          <div class="buttons">
            <NuxtLink to="/cart" class="button btn view-cart btn-primary">
              View cart
            </NuxtLink>
            <NuxtLink to="/checkout" class="button btn checkout btn-default">
              Check out
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cartStore";
const cartStore = useCartStore();

const storeItems = computed(() => cartStore.items);

const cartTotal = computed(() => cartStore.getCartTotal);


</script>

<style lang="scss" scoped>

</style>
