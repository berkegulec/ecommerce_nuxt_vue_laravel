<template>
    <div class="rating">
        <div class="star" :class="star_c"></div>
        <div class="review-count">({{ review_c }}<span> reviews</span>)</div>
    </div>
</template>

<script setup>
const props = defineProps(['starCount', 'reviewCount']);
const star_c = computed(() => `star-` + Math.round(props.starCount));
const review_c = computed(() => Math.round(props.reviewCount));
</script>

<style lang="scss" scoped>

</style>