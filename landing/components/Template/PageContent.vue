<template>
  <div id="title" class="page-title" v-if="title">
    <div class="section-container">
      <div class="content-title-heading">
        <h1 class="text-title-heading">{{ title }}</h1>
      </div>
      <div class="breadcrumbs">
        <NuxtLink to="/">Home</NuxtLink>
        <span class="delimiter"></span>
        <NuxtLink :to="secondLink.uri" v-if="secondLink.uri">
          {{ secondLink.name }}
        </NuxtLink>
        <span class="delimiter" v-if="secondLink.name"></span>
        {{ title }}
      </div>
    </div>
  </div>
  <div id="content" class="site-content" role="main">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  secondLink: {
    type: Object,
    default(rawProps) {
      let tmpProp = { name: "", uri: "" };
      if (typeof rawProps.secondLink !== "undefined") {
        if (typeof rawProps.secondLink.uri !== "undefined")
          tmpProp.uri = rawProps.secondLink.uri;
        if (typeof rawProps.secondLink.name !== "undefined")
          tmpProp.name = rawProps.secondLink.name;
      }

      return tmpProp;
    },
  },
});
</script>

<style lang="scss" scoped></style>
