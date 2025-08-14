<template>
  <div class="menu-page">
    <!-- Header -->
    <CategoriesHeader @search="handleSearch" @item-click="handleItemClick" />

    <!-- Menu Header -->
    <MenuHeader 
      :category-title="currentCategory?.name_ar || currentCategory?.name || ''"
      @go-back="goBack"
    />

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner">جاري التحميل...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <div class="error-message">{{ error }}</div>
      <button @click="retryLoad" class="retry-button">إعادة المحاولة</button>
    </div>

    <!-- Menu Items Grid -->
    <MenuItemsGrid
      v-else
      :items="currentCategoryItems"
      :expanded-item="expandedItem"
      @toggle-expansion="toggleItemExpansion"
    />


  </div>
</template>

<script setup lang="ts">
const {
  expandedItem,
  currentCategory,
  currentCategoryItems,
  loading,
  error,
  handleSearch,
  handleItemClick,
  goBack,
  toggleItemExpansion,
  loadMenuItems
} = useMenu();

const retryLoad = async () => {
  if (currentCategory.value) {
    await loadMenuItems(currentCategory.value.id);
  }
};
</script>

<style>
@import "~/assets/css/menu.css";

/* Menu Page Styles */
.menu-page {
  min-height: 100vh;
  background: #ffffff;
  text-align: center;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.loading-spinner {
  font-size: 1.2rem;
  color: #666;
}

.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  gap: 1rem;
}

.error-message {
  font-size: 1.1rem;
  color: #e74c3c;
  text-align: center;
}

.retry-button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
}

.retry-button:hover {
  background-color: #2980b9;
}
</style>
