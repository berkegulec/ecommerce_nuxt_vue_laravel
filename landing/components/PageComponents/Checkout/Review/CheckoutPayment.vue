<template>
    <div id="payment" class="checkout-payment">
        <ul class="payment-methods methods custom-radio">
            <li class="payment-method" v-for="(item, index) in paymentMethods" :key="index" @click="slcPaymentMethod=item.id">
                <input type="radio" class="input-radio" name="payment_method" v-model="slcPaymentMethod"  :value="item.id">
                <label for="payment_method_bacs">{{ item.name }}</label>
                <div class="payment-box">
                    <p>{{ item.description }}</p>
                </div>
            </li>
        </ul>
        <div class="form-row place-order">
            <div class="terms-and-conditions-wrapper">
                <div class="privacy-policy-text"></div>
            </div>
            <button type="submit" class="button alt" name="checkout_place_order" value="Place order">Place
                order</button>
        </div>
    </div>
</template>

<script setup>
import { useCheckoutStore } from '~~/stores/checkoutStore';

const chkStore = useCheckoutStore();
const paymentMethods = computed(() => chkStore.paymentMethods);
const slcPaymentMethod=ref("");
</script>

<style lang="scss" scoped>

</style>