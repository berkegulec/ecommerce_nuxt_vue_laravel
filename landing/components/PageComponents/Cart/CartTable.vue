<template>
    <form class="cart-form" action="" method="post">
        <div class="table-responsive">
            <table class="cart-items table" cellspacing="0">
                <thead>
                    <tr>
                        <th class="product-thumbnail">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Subtotal</th>
                        <th class="product-remove">&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Cart Items -->

                    <tr class="cart-item" v-for="(item, index) in cartItems" :key="index">
                        <td class="product-thumbnail">
                            <a href="shop-details.html">
                                <img width="600" height="600" :src="item.img" class="product-image" alt="" />
                            </a>
                            <div class="product-name">
                                <a href="shop-details.html">{{ item.name }}</a>
                            </div>
                        </td>
                        <td class="product-price">
                            <span>${{ item.price }}</span>
                        </td>
                        <td class="product-quantity">
                            <div class="quantity">
                                <button type="button" class="minus"
                                    @click.prevent="changeQty(item.id, item.qty, '-')">-</button>
                                <input type="number" class="qty" step="1" min="0" max="" name="quantity"
                                    v-model="item.qty" title="Qty" size="4" placeholder="" inputmode="numeric"
                                    autocomplete="off" />
                                <button type="button" class="plus"
                                    @click.prevent="changeQty(item.id, item.qty, '+')">+</button>
                            </div>
                        </td>
                        <td class="product-subtotal">
                            <span class="price">${{ item.price }}</span>
                        </td>
                        <td class="product-remove" @click="removeCart(item.id)">
                            <a class="remove cursor-pointer">×</a>
                        </td>
                    </tr>
                    <!-- Cart Actions -->
                    <tr>
                        <td colspan="6" class="actions">
                            <div class="bottom-cart">
                                <div class="coupon">
                                    <input type="text" name="coupon_code" class="input-text" id="coupon-code" value=""
                                        placeholder="Coupon code" />
                                    <button type="submit" name="apply_coupon" class="button" value="Apply coupon">
                                        Apply coupon
                                    </button>
                                </div>
                                <h2>
                                    <NuxtLink to="/products">
                                        Continue Shopping
                                    </NuxtLink>
                                </h2>
                                <button type="button" name="update_cart" class="button" value="Update cart"
                                    @click.prevent="updateCart">
                                    Update cart
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
</template>

<script setup>
const emits = defineEmits(["updateCart", "apply_coupon", "removeCart", "changeQty"]);
const props = defineProps({
    cartItems: {
        type: Array,
        default: []
    }
});
const removeCart = (id) => emits("removeCart", id);
const changeQty = (id, qty, type) => emits("changeQty", id, qty, type);
const updateCart = () => emits("updateCart");
</script>

<style lang="scss" scoped>

</style>