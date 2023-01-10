<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator :duration="10000" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup></script>

<style>
.swal2-container{
  z-index: 999999999;
}
</style>
