<template>
  <div class="page-preloader" :class="!loading?`d-none`:``">
    <div class="loader">
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(true);

onMounted(() => (loading.value = false));
</script>

<style lang="scss" scoped></style>
