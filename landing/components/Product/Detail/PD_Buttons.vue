<template>
    <div class="buttons">
        <div class="add-to-cart-wrap">
            <div class="quantity">
                <button type="button" class="plus" @click="product_qty += 1">+</button>
                <input type="number" class="qty" step="1" min="0" max="" name="quantity" title="Qty" size="4"
                    placeholder="" inputmode="numeric" autocomplete="off" v-model="product_qty" />
                <button type="button" class="minus"
                    @click="(Number(product_qty) - 1) > 0 ? product_qty -= 1 : ``">-</button>
            </div>
            <div class="btn-add-to-cart" @click="addCart">
                <a class="button" tabindex="0" >Add to cart</a>
            </div>
        </div>
        <div class="btn-quick-buy" data-title="Wishlist">
            <button class="product-btn">Buy It Now</button>
        </div>
        <div class="btn-wishlist" data-title="Wishlist">
            <button class="product-btn" @click="addWishlist">Add to wishlist</button>
        </div>
        <div class="btn-compare" data-title="Compare">
            <button class="product-btn">Compare</button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cartStore";
import { useWishlistStore } from "~~/stores/wishlistStore";
import { useMainStore } from "~~/stores/mainStore";
const props = defineProps(['product_id']);
const product_qty = ref(1);

const mainStore = useMainStore();
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const addCart = async () => await cartStore.addItemToCart(props.product_id,product_qty.value);
const addWishlist = async () => (await wishlistStore.addItemToWishlist(props.product_id).then(() => mainStore.navMenuStatus.wishlist = true));

</script>

<style lang="scss" scoped>

</style>