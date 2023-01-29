<template>
    <PageContent title="Checkout">
        <div class="section-padding">
            <div class="section-container p-l-r">
                <div class="shop-checkout">
                    <form name="checkout" method="post" class="checkout" action="" autocomplete="off">
                        <div class="row">
                            <div class="col-xl-8 col-lg-7 col-md-12 col-12">
                                <div class="customer-details">
                                    <!-- Billing Fields -->
                                    <BillingFields />
                                    <!-- AccountFields -->
                                    <AccountFields />
                                </div>
                                <!-- Shipping Fields -->
                                <div class="shipping-fields">
                                    <p class="form-row form-row-wide ship-to-different-address">
                                        <label class="checkbox">
                                            <input class="input-checkbox" type="checkbox"
                                                name="ship_to_different_address" v-model="shippingDifferentAddress">
                                            <span>Ship to a different address?</span>
                                        </label>
                                    </p>
                                    <ShippingFields v-if="shippingDifferentAddress" />
                                </div>
                                <!-- Additional Fields -->
                                <AdditionalFields />
                            </div>
                            <div class="col-xl-4 col-lg-5 col-md-12 col-12">
                                <!-- Checkout Review Order -->
                                <CheckoutReviewOrder />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </PageContent>
</template>

<script setup>
import AccountFields from '~~/components/PageComponents/Checkout/AccountFields.vue';
import AdditionalFields from '~~/components/PageComponents/Checkout/AdditionalFields.vue';
import BillingFields from '~~/components/PageComponents/Checkout/BillingFields.vue';
import CheckoutReviewOrder from '~~/components/PageComponents/Checkout/CheckoutReviewOrder.vue';
import ShippingFields from '~~/components/PageComponents/Checkout/ShippingFields.vue';
import PageContent from '~~/components/Template/PageContent.vue';

const shippingDifferentAddress = ref(false);

</script>

<style lang="scss" scoped>

</style>