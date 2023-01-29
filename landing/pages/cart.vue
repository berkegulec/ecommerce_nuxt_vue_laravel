<template>
  <PageContent title="Cart">
    <div class="section-padding">
      <div class="section-container p-l-r">
        <div class="shop-cart" v-if="cartItems.length">
          <div class="row">
            <div class="col-xl-8 col-lg-12 col-md-12 col-12">
              <CartTable :cart-items="cartItems" @change-qty="changeQty" />
            </div>
            <!-- Cart Totals -->
            <CartTotals :total="total" :shipping-methods="shipping_methods" />
          </div>
        </div>
        <CartEmpty v-else />
      </div>
    </div>
  </PageContent>
</template>

<script setup>
import CartEmpty from "~~/components/PageComponents/Cart/CartEmpty.vue";
import CartTable from "~~/components/PageComponents/Cart/CartTable.vue";
import CartTotals from "~~/components/PageComponents/Cart/CartTotals.vue";
import PageContent from "~~/components/Template/PageContent.vue";
import { useCartStore } from "~~/stores/cartStore";
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.items);
const total = computed(() => cartStore.getCartTotal);
const { $swal } = useNuxtApp();

const shipping_methods = ref([
  {
    value: "free_shipping",
    name: "Free shipping"
  },
  {
    value: "flat_rate",
    name: "Flat rate"
  }
])

const changeQty = (id, qty, type) => {
  let _qty = Number(qty);
  if (type == "+") {
    cartStore.changeQtyCartItem(id, (_qty + 1))
  } else {
    if ((Number(qty) - 1) < 1) {
      $swal.fire({
        title: 'Cart Item Will be Removed.Are you sure?',
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: `Cancel`,
      }).then((result) => {
        if (result.isConfirmed) {
          cartStore.removeItemFromCart(id);
        }
      })
    } else {
      cartStore.changeQtyCartItem(id, (_qty - 1))
    }
  }
}
</script>

<style scoped>

</style>
