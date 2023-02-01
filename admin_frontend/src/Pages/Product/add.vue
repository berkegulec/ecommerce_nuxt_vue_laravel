<template>
    <PageLayout :is-loading="isLoading">
        <div>
            product add
        </div>
    </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import PageLayout from '../../components/Layout/PageLayout.vue';
const isLoading = ref(false);

</script>

<style lang="scss" scoped>

</style>