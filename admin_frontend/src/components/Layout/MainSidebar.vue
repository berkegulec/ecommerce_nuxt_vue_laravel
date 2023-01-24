<template>
  <div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
    <!-- App logo and controls -->
    <div class="navbar navbar-dark bg-dark-100 navbar-static border-0">
      <div class="navbar-brand flex-fill wmin-0">
        <a href="index.html" class="d-inline-block">
          <img src="../../../../global_assets/images/logo_light.png" class="sidebar-resize-hide" alt="" />
          <img src="../../../../global_assets/images/logo_icon_light.png" class="sidebar-resize-show" alt="" />
        </a>
      </div>

      <ul class="navbar-nav align-self-center ml-auto sidebar-resize-hide">
        <li class="nav-item dropdown">
          <button type="button"
            class="btn btn-outline-light-100 text-white border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
            <i class="icon-transmission"></i>
          </button>

          <button type="button"
            class="btn btn-outline-light-100 text-white border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none">
            <i class="icon-cross2"></i>
          </button>
        </li>
      </ul>
    </div>
    <!-- /app logo and controls -->

    <!-- Sidebar content -->
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
              <a @click="logout" class="dropdown-item">
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
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">
              <i class="icon-home4"></i>
              <span>
                Dashboard
              </span>
            </RouterLink>
          </li>
          <!-- /layout -->
        </ul>
      </div>
      <!-- /main navigation -->
    </div>
    <!-- /sidebar content -->

    <!-- Service status -->
    <!-- <div class="sidebar-section sidebar-section-body sidebar-resize-hide bg-dark-100">
      <div class="d-flex mb-2">
        <div class="font-weight-semibold">My storage</div>
        <span class="ml-auto">80% used</span>
      </div>

      <div class="progress bg-light-100 mb-1" style="height: 0.25rem">
        <div class="progress-bar bg-warning" style="width: 80%">
          <span class="sr-only">80% Complete</span>
        </div>
      </div>
    </div> -->
    <!-- /service status -->
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useMainStore } from "../../stores/main_store";
import { userToken } from "../../utils/userStorage_helper";
import { useRouter } from 'vue-router'
const router = useRouter();
const swal = inject('$swal');
const mainStore = useMainStore();
const { userData } = mainStore;

const menuItems = ref(
  [
    { name: "Single Menu", uri: "/settings", icon: "fa fa-pencil" },
    {
      name: "Single Menu", uri: "/settings", icon: "fa fa-pencil", childs: [
        { name: "Zart", uri: "/zurt", icon: 'fa fa-plane' }
      ]
    },

  ]
);

const logout = () => {
  mainStore.logout();
  swal.fire('Redirecting..', 'Logged Out', 'success').then(() => location.href = '/login')
}
</script>

<style lang="scss" scoped>

</style>
