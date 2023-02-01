<template>
    <PageLayout>
        <template v-slot:headerButtons>
            <button type="button" class="btn btn-indigo">
                <i class="icon-stack2 mr-2"></i> New report
            </button>
            <button type="button" class="btn btn-indigo dropdown-toggle" data-toggle="dropdown"></button>
            <div class="dropdown-menu dropdown-menu-right">
                <div class="dropdown-header">Actions</div>
                <a href="#" class="dropdown-item"><i class="icon-file-eye"></i> View reports</a>
                <a href="#" class="dropdown-item"><i class="icon-file-plus"></i> Edit reports</a>
                <a href="#" class="dropdown-item"><i class="icon-file-stats"></i> Statistics</a>
                <div class="dropdown-header">Export</div>
                <a href="#" class="dropdown-item"><i class="icon-file-pdf"></i> Export to PDF</a>
                <a href="#" class="dropdown-item"><i class="icon-file-excel"></i> Export to CSV</a>
            </div>
        </template>

        
        <div>
            product list
        </div>
    </PageLayout>

</template>

<script setup>
import PageLayout from '../../components/Layout/PageLayout.vue';


</script>

<style lang="scss" scoped>

</style>