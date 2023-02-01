<template>
    <!-- Page content -->
    <div class="page-content">
        <PageLoader :loading="isLoading" />
        <!-- Main sidebar -->
        <MainSidebar />
        <!-- /main sidebar -->

        <!-- Main content -->
        <div class="content-wrapper">
            <!-- Main navbar -->
            <MainNavbar />
            <!-- /main navbar -->

            <!-- Inner content -->
            <div class="content-inner">
                <!-- Page header -->
                <PageHeader :first-title="firstTitle" :second-title="secondTitle">
                    <slot name="headerButtons" />
                </PageHeader>
                <!-- /page header -->

                <!-- Content area -->
                <div class="content pt-0">

                    <slot />
                </div>
                <!-- /content area -->

                <!-- Footer -->
                <Footer />
                <!-- /footer -->
            </div>
            <!-- /inner content -->
        </div>
        <!-- /main content -->
    </div>
</template>

<script setup>
import PageLoader from '../PageLoader.vue';
import Footer from './Footer.vue';
import MainNavbar from './MainNavbar.vue';
import MainSidebar from './Sidebar/Sidebar.vue';
import PageHeader from './PageHeader.vue';

const props = defineProps({
    isLoading: {
        type: Boolean,
        required: true
    },
    firstTitle: {
        type: String,
        required: true
    },
    secondTitle: {
        type: String,
        default: ""
    },
});
</script>

<style lang="scss" scoped>

</style>