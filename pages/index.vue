<template>
  <div class="categories-container">
    <!-- Header -->
    <CategoriesHeader 
      @search="handleSearch" 
      @item-click="handleItemClick"
    />

    <!-- <CategoryNavigation
      :selected-category="selectedCategory"
      @select-category="scrollToCategory"
      @item-click="handleItemClick"
    /> -->

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner">جاري التحميل...</div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <div class="error-message">{{ error }}</div>
      <button @click="loadCategories" class="retry-button">إعادة المحاولة</button>
    </div>

    <!-- Categories Grid -->
    <div v-else class="categories-grid">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category.id.toString()"
        :title="category.name_ar || category.name"
        :image="category.image"
        :items-count="category.items_count"
        @select="selectCategory"
      />
    </div>


  </div>
</template>

<script setup lang="ts">
import { useCategories } from '~/composables/useCategories';
import type { ApiMenuItem } from '~/types/menu';

const { 
  categories, 
  loading, 
  error, 
  selectedCategory,
  handleSearch, 
  loadCategories 
} = useCategories();

const selectCategory = (categoryId: string) => {
  // Navigate to menu page and scroll to specific category
  console.log('Navigating to category:', categoryId);
  navigateTo(`/menu#${categoryId}`);
};

const handleItemClick = (item: ApiMenuItem) => {
  // Navigate to menu page and scroll to the specific item's category
  console.log('Item clicked:', item);
  navigateTo(`/menu#${item.id}`);
};

const scrollToCategory = (categoryId: string) => {
  // Navigate to menu page and scroll to specific category
  console.log('Scrolling to category:', categoryId);
  navigateTo(`/menu#${categoryId}`);
};
</script>

<style>
@import '~/assets/css/categories.css';

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
