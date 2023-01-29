<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :duration="10000" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useMainStore } from './stores/mainStore';

const mainStore = useMainStore();
</script>

<style>
.swal2-container {
  z-index: 999999999;
}
</style>
