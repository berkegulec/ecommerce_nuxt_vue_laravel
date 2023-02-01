<template>
    <div class="sidebar-content">
        <!-- User menu -->
        <div class="sidebar-section sidebar-section-body user-menu-vertical text-center">
            <div class="card-img-actions d-inline-block">
                <img class="img-fluid rounded-circle" :src="userData.image" width="80" height="80" alt="" />
                <div class="card-img-actions-overlay card-img rounded-circle">
                    <a href="#" class="btn btn-white btn-icon btn-sm rounded-pill">
                        <i class="icon-pencil"></i>
                    </a>
                </div>
            </div>

            <div class="sidebar-resize-hide position-relative mt-2">
                <div class="dropdown">
                    <div class="cursor-pointer" data-toggle="dropdown">
                        <h6 class="font-weight-semibold dropdown-toggle mb-0">
                            {{ userData.name }}
                        </h6>
                        <span class="d-block text-muted">{{ userData.role }}</span>
                    </div>

                    <div class="dropdown-menu w-100">
                        <a href="#" class="dropdown-item">
                            <i class="icon-user-plus"></i>
                            My profile
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="icon-coins"></i>
                            My balance
                        </a>
                        <a href="#" class="dropdown-item">
                            <i class="icon-comment-discussion"></i>
                            Messages
                            <span class="badge badge-indigo badge-pill ml-auto">58</span>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <i class="icon-cog5"></i>
                            Account settings
                        </a>
                        <a @click="$emit('logout')" class="dropdown-item">
                            <i class="icon-switch2"></i>
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->

        <!-- Main navigation -->
        <div class="sidebar-section">
            <ul class="nav nav-sidebar" data-nav-type="accordion">
                <!-- Main -->

                <!-- single -->
                <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                    <RouterLink :to="item.uri" class="nav-link">
                        <i :class="item.icon"></i>
                        <span>
                            {{ item.name }}
                        </span>
                    </RouterLink>
                </li>
                <!-- /layout -->
            </ul>
        </div>
        <!-- /main navigation -->
    </div>
</template>

<script setup>
const emits = defineEmits(['logout']);
const props = defineProps({
    menuItems: {
        type: Array,
        required: true,
        default: [],
    },
    userData: {
        type: Object
    }
});
</script>

<style lang="scss" scoped>

</style>