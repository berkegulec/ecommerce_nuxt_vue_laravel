<template>
  <div class="products-loadmore">
    <div class="btn button-outline loadmore" :class="{ loadingClass: loading }">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <span v-if="loading == false">Load more</span>
      <i v-if="loading == false" class="icon-arrow-down" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
const loadingClass = ref("loading");
</script>

<style scoped></style>
