<template>
  <div class="categories-container">
    <!-- Header -->
    <CategoriesHeader 
      @search="handleSearch" 
      @item-click="handleItemClick"
    />

    <!-- Categories Grid -->
    <div class="categories-grid">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category.id"
        :title="category.title"
        :icon="category.icon"
        @select="selectCategory"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { categories } from '~/data/categories';
import { useCategories } from '~/composables/useCategories';
import type { MenuItem } from '~/data/menuItems';

const { handleSearch } = useCategories();

const selectCategory = (categoryId: string) => {
  // Navigate to menu page and scroll to specific category
  navigateTo(`/menu#${categoryId}`);
};

const handleItemClick = (item: MenuItem) => {
  // Navigate to menu page and scroll to the specific item's category
  navigateTo(`/menu#${item.category}`);
};
</script>

<style>
@import '~/assets/css/categories.css';
</style>
