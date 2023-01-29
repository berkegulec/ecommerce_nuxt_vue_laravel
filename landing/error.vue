<template>
  <PageContent>
    <div class="section-padding">
      <div class="section-container p-l-r">
        <div class="page-404">
          <div class="content-page-404">
            <div class="title-error">404</div>
            <div class="sub-title">Oops! That page can't be found.</div>
            <div class="sub-error">
              We're really sorry but we can't seem to find the page you were looking for.
            </div>
            <a class="button cursor-pointer" @click="handleError"> Back The Homepage </a>
          </div>
        </div>
      </div>
    </div>
  </PageContent>
</template>

<script setup>
import PageContent from "./components/Template/PageContent.vue";
const router = useRouter();
const props = defineProps({ error: Object });
const handleError = () => clearError({ redirect: router.push('/') });
</script>

<style lang="scss" scoped>

</style>
