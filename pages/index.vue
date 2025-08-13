<template>
  <div class="categories-container">
    <!-- Header -->
    <CategoriesHeader @search="handleSearch" />

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

<script lang="ts" setup>
import { categories } from '~/data/categories';
import { useCategories } from '~/composables/useCategories';

const { handleSearch } = useCategories();

const selectCategory = (categoryId: string) => {
  // Navigate to menu page and scroll to specific category
  navigateTo(`/menu#${categoryId}`);
};
</script>

<style>
@import '~/assets/css/categories.css';
</style>
