<template>
  <div class="page-header">
    <div class="page-header-content header-elements-lg-inline">
      <div class="page-title d-flex">
        <h4>
          <i class="icon-arrow-left52 mr-2"></i>
          <span class="font-weight-semibold">{{ firstTitle }}</span> {{ secTitle }}
        </h4>
        <a href="#" class="header-elements-toggle text-body d-lg-none"><i class="icon-more"></i></a>
      </div>

      <HeaderButtonsWrapper>
        <slot />
      </HeaderButtonsWrapper>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import HeaderButtonsWrapper from '../Elements/HeaderButtons/HeaderButtonsWrapper.vue';
const props = defineProps({
  firstTitle: {
    type: String,
  },
  secondTitle: {
    type: String,
  },
});

const secTitle = computed(() => props.secondTitle ? `-${props.secondTitle}` : ``);
</script>

<style lang="scss" scoped>

</style>
