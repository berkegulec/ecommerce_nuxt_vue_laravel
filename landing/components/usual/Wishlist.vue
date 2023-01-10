<template>
  <div class="wishlist-popup" :class="{ 'show': navMenuStatus.wishlist }" @click="handleExit">
    <div class="wishlist-popup-inner">
      <div class="wishlist-popup-content">
        <div class="wishlist-popup-content-top">
          <span class="wishlist-name">Wishlist</span>
          <span class="wishlist-count-wrapper"><span class="wishlist-count">2</span></span>
          <span class="wishlist-popup-close" @click="toggleWishlistPopup"></span>
        </div>
        <div class="wishlist-popup-content-mid">
          <table class="wishlist-items">
            <tbody>
              <tr class="wishlist-item" v-for="(item, index) in wishlistItems" :key="index">
                <td class="wishlist-item-remove" @click="removeFromWishlist(item.id)"><span></span></td>
                <td class="wishlist-item-image">
                  <a href="shop-details.html">
                    <img width="600" height="600" :src="item.img" alt="" />
                  </a>
                </td>
                <td class="wishlist-item-info">
                  <div class="wishlist-item-name">
                    <a href="shop-details.html">{{ item.name }}</a>
                  </div>
                  <div class="wishlist-item-price">
                    <span>${{ item.price }}</span>
                  </div>
                  <div class="wishlist-item-time">June 4, 2022</div>
                </td>
                <td class="wishlist-item-actions">
                  <div class="wishlist-item-stock">In stock</div>
                  <div class="wishlist-item-add">
                    <div data-title="Add to cart">
                      <a class="button" @click="addToCartAndRemoveWishlist(item.id)">Add to cart</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="wishlist-popup-content-bot">
          <div class="wishlist-popup-content-bot-inner">
            <a class="wishlist-page" @click="redirectWishlistPage">
              Open wishlist page
            </a>
            <span class="wishlist-continue" @click="toggleWishlistPopup()">
              Continue shopping
            </span>
          </div>
          <div class="wishlist-notice wishlist-notice">
            <!-- wishlist-notice wishlist-notice-show -->
            Added to the wishlist!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~~/stores/mainStore';
import { useWishlistStore } from '~~/stores/wishlistStore';
import { useCartStore } from '~~/stores/cartStore';
const { navMenuStatus } = useMainStore();
const wishlistStore = useWishlistStore();
const { addItemToCart } = useCartStore();
const router = useRouter();
const wishlistItems = computed(() => wishlistStore.items);

const toggleWishlistPopup = () => navMenuStatus.wishlist = !navMenuStatus.wishlist;
const redirectWishlistPage = () => { toggleWishlistPopup(), router.push('/wishlist'); }

const removeFromWishlist = (id) => wishlistStore.removeItemFromWishlist(id);

const addToCartAndRemoveWishlist = (id) => (addItemToCart(id), wishlistStore.removeItemFromWishlist(id));

const handleExit = (e) => {
  let needToExitClassNames = ["wishlist-popup-inner", "wishlist-popup"];
  let el = e.target;
  if (needToExitClassNames.some(className => el.classList.contains(className))) navMenuStatus.wishlist = false;
};
</script>

<style lang="scss" scoped>

</style>
