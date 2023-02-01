<template>
  <div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg" :class="sidebarClass" ref="sidebarmain"
    @mouseover="sidebarMouseOver()" @mouseout="sidebarMouseOut()">
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
          <button type="button" @click="toggleSidebar"
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
    <SidebarContent :user-data="userData" :menu-items="menuItems" @logout="logout" />
    <!-- /sidebar content -->
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import { useMainStore } from "../../../stores/user_store";
import { useTemplateStore } from "../../../stores/template_store";
import SidebarContent from "./SidebarContent.vue";
const swal = inject('$swal');

const mainStore = useMainStore();
const { userData } = mainStore;

const templateStore = useTemplateStore();


const menuItems = ref(
  [
    { name: "Dashboard", uri: "/dashboard", icon: "icon-home4" },
    { name: "Orders", uri: "/orders", icon: "icon-home4" },
    { name: "Products", uri: "/products", icon: "icon-home4" },
    { name: "Users", uri: "/users", icon: "icon-home4" },
    { name: "Settings", uri: "/settings", icon: "icon-home4" },

  ]
);

const logout = () => {
  mainStore.logout();
  swal.fire('Redirecting..', 'Logged Out', 'success').then(() => location.href = '/login')
}


const sidebarmain = ref(null);
const resizeClass = 'sidebar-main-resized',
  unfoldClass = 'sidebar-main-unfold';

const unfoldDelay = 150;
const timerStart = ref(null), timerFinish = ref(null);

const sidebarClass = computed(() => templateStore.sidebarHidden ? `sidebar-main-resized` : '');

const sidebarMouseOut = () => {
  clearTimeout(timerStart.value);
  timerFinish.value = setTimeout(function () {
    sidebarmain.value.classList.remove(unfoldClass);
  }, unfoldDelay);
}

const sidebarMouseOver = () => {
  clearTimeout(timerFinish.value);
  timerStart.value = setTimeout(function () {
    sidebarmain.value.classList.contains(resizeClass) ? sidebarmain.value.classList.add(unfoldClass) : ``;
  }, unfoldDelay);
}
const toggleSidebar = () => templateStore.toggleSidebar();

</script>

<style lang="scss" scoped>

</style>
