<template>
  <PageContent title="Product List">
    <div class="section-padding">
      <div class="section-container p-l-r">
        <div class="row">
          <div
            class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50"
          >
            <!-- Left Column -->
            <ListLeftColumn />
          </div>

          <div class="col-xl-9 col-lg-9 col-md-12 col-12">
            <!-- Right Column -->
            <ListRightColumn />
          </div>
        </div>
      </div>
    </div>
  </PageContent>
</template>

<script setup>
import ListLeftColumn from "~~/components/Product/List/LeftColumn/ListLeftColumn.vue";
import ListRightColumn from "~~/components/Product/List/RightColumn/ListRightColumn.vue";
import PageContent from "~~/components/Template/PageContent.vue";
</script>

<style lang="scss" scoped></style>
