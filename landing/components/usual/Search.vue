<template>
  <!-- Search -->
  <div
    class="search-overlay"
    :class="{ 'search-visible': navMenuStatus.search }"
    @click="handleExit"
  >
    <div class="close-search"></div>
    <div class="wrapper-search">
      <form
        role="search"
        method="get"
        class="search-from ajax-search"
        action=""
      >
        <div class="search-box">
          <button id="searchsubmit" class="btn" type="submit">
            <i class="icon-search"></i>
          </button>
          <input
            id="myInput"
            type="text"
            autocomplete="off"
            value=""
            name="s"
            class="input-search s"
            placeholder="Search..."
          />
          <div class="search-top">
            <div class="close-search">Cancel</div>
          </div>
          <div class="content-menu_search">
            <label>Suggested</label>
            <ul id="menu_search" class="menu">
              <li><a href="#">Furniture</a></li>
              <li><a href="#">Home Décor</a></li>
              <li><a href="#">Industrial</a></li>
              <li><a href="#">Kitchen</a></li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~~/stores/mainStore";
const { navMenuStatus } = useMainStore();
const handleExit = (e) => {
  let el = e.target;
  if (el.classList.contains("close-search")) navMenuStatus.search = false;
};
</script>

<style lang="scss" scoped></style>
