<template>
  <div class="card-overlay" v-if="loading"><i class="icon-spinner9 spinner text-body"></i></div>
</template>

<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>

</style>
