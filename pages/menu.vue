<template>
  <div class="menu-page">
    <!-- Header -->
    <CategoriesHeader @search="handleSearch" @item-click="handleItemClick" />

    <!-- Menu Header -->
    <MenuHeader 
      :category-title="$t(currentCategory?.titleKey || '')"
      @go-back="goBack"
    />

    <!-- Menu Items Grid -->
    <MenuItemsGrid
      :items="currentCategoryItems"
      :expanded-item="expandedItem"
      @toggle-expansion="toggleItemExpansion"
    />
  </div>
</template>

<script lang="ts" setup>
const {
  expandedItem,
  currentCategory,
  currentCategoryItems,
  handleSearch,
  handleItemClick,
  goBack,
  toggleItemExpansion,
} = useMenu();
</script>

<style>
@import "~/assets/css/menu.css";

/* Menu Page Styles */
.menu-page {
  min-height: 100vh;
  background: #ffffff;
  text-align: center;
}
</style>
