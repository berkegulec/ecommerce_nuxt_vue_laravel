<template>
  <PageLayout>
    <div class="row">
      <div class="col-md-4">
        <StatisticsCard background-color="#ef5350" number-area="5431" icon-position="left"
          text-content="ıkahsjfdhgjlasfdhjg aslfkhjaslk" @card-clicked="tiklandi" />
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
import PageLayout from '../components/Layout/PageLayout.vue';
import StatisticsCard from '../components/StatisticsCard.vue';

const tiklandi = (e) => {
  console.log(e);
}

</script>

<style scoped>

</style>