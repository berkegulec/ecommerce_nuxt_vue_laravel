<template>
    <!-- Page content -->
    <div class="page-content">
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
                <PageHeader />
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
import Footer from './Footer.vue';
import MainNavbar from './MainNavbar.vue';
import MainSidebar from './MainSidebar.vue';
import PageHeader from './PageHeader.vue';


</script>

<style lang="scss" scoped>

</style>