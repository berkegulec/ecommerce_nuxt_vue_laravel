<template>
  <PageLayout :is-loading="loading">
    <div class="row">
      <div class="col-md-4">
        <StatisticsCard background-color="#ef5350" number-area="5431" icon-position="left"
          text-content="ıkahsjfdhgjlasfdhjg aslfkhjaslk" />
      </div>
      <div class="col-md-4">
        <StatisticsCard background-color="#ef5350" number-area="5431" icon-position="left"
          text-content="ıkahsjfdhgjlasfdhjg aslfkhjaslk" />
      </div>
      <div class="col-md-4">
        <StatisticsCard background-color="#ef5350" number-area="5431" icon-position="left"
          text-content="ıkahsjfdhgjlasfdhjg aslfkhjaslk" />
      </div>

    </div>
  </PageLayout>
</template>

<script setup>
import { ref } from 'vue';
import PageLayout from '../components/Layout/PageLayout.vue';
import StatisticsCard from '../components/Elements/Cards/StatisticsCard.vue';
const loading = ref(false);

</script>

<style scoped>

</style>