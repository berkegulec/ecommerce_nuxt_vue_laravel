<template>
    <div class="shipping-totals shipping">
        <h2>Shipping</h2>
        <div data-title="Shipping">
            <ul class="shipping-methods custom-radio">
                <li v-for="(item, index) in shippingMethods" :key="index" @click="changeMethod(item.id)">
                    <input type="radio" name="shipping_method" :data-index="index" :value="item.id"
                        v-model="selectedMethod" class="shipping_method" checked="checked"><label>
                        {{ item.name }}
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(["changeMethod"]);
const props = defineProps({
    shippingMethods: {
        type: Array,
        default: []
    }
});
const selectedMethod = ref("");
const changeMethod = (id) => {
    selectedMethod.value = id;
    emits("changeMethod", id);
}
</script>

<style lang="scss" scoped>

</style>