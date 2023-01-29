<template>
    <div class="checkout-review-order-table">
        <div class="review-order-title">Product</div>
        <div class="cart-items">
            <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
                <div class="info-product">
                    <div class="product-thumbnail">
                        <img width="600" height="600" :src="item.img" alt="">
                    </div>
                    <div class="product-name">
                        {{ item.name }}
                        <strong class="product-quantity">QTY : {{ item.qty }}</strong>
                    </div>
                </div>
                <div class="product-total">
                    <span>${{ item.price }}</span>
                </div>
            </div>
        </div>
        <div class="cart-subtotal">
            <h2>Subtotal</h2>
            <div class="subtotal-price">
                <span>${{ subTotal }}</span>
            </div>
        </div>
        <!-- Shipping Methods -->
        <ShippingMethods :shipping-methods="shippingMethods" @change-method="changeShippingMethod" />
        <div class="order-total">
            <h2>Total</h2>
            <div class="total-price">
                <strong>
                    <span>${{ total }}</span>
                </strong>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~~/stores/cartStore';
import { useCheckoutStore } from '~~/stores/checkoutStore';
import ShippingMethods from './ShippingMethods.vue';

const cartStore = useCartStore();
const checkoutStore = useCheckoutStore();
const cartItems = computed(() => cartStore.items);
const subTotal = computed(() => 0);
const total = computed(() => cartStore.getCartTotal);
const shippingMethods = computed(() => checkoutStore.shippingMethods);
const changeShippingMethod = (id) => checkoutStore.selectedShippingMethod = id;

onUnmounted(() => {
    checkoutStore.$dispose();
});
</script>

<style lang="scss" scoped>

</style>