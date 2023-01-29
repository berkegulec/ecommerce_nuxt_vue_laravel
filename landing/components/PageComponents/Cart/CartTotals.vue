<template>
    <div class="col-xl-4 col-lg-12 col-md-12 col-12">
        <div class="cart-totals">
            <h2>Cart totals</h2>
            <div>
                <div class="cart-subtotal">
                    <div class="title">Subtotal</div>
                    <div><span>${{ subtotal }}</span></div>
                </div>
                <div class="shipping-totals">
                    <div class="title">Shipping</div>
                    <div>
                        <ul class="shipping-methods custom-radio">
                            <li v-for="(item, index) in shippingMethods" :key="index" @click="selected = item.value">
                                <input type="radio" name="shipping_method" :value="item.value" v-model="selected"
                                    class="shipping_method" />
                                <label>{{ item.name }}</label>
                            </li>
                        </ul>
                        <p class="shipping-desc">
                            Shipping options will be updated during checkout.
                        </p>
                    </div>
                </div>
                <div class="order-total">
                    <div class="title">Total</div>
                    <div><span>${{ total }}</span></div>
                </div>
            </div>
            <div class="proceed-to-checkout">
                <NuxtLink to="/checkout" class="checkout-button button">
                    Proceed to checkout
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    shippingMethods: {
        type: Array,
        default: []
    },
    total: {
        required: false,
        default: "0"
    },
    subtotal: {
        required: false,
        default: "0"
    }
});
const selected = ref("");
</script>

<style lang="scss" scoped>

</style>