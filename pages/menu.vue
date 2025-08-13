<template>
  <div class="menu-page ">
    <!-- Category Navigation -->
    <CategoryNavigation
      :selected-category="activeCategory"
      @back-to-categories="navigateToCategories"
      @scroll-to-top="scrollToTop"
      @select-category="scrollToCategory"
      @item-click="handleItemClick"
    />

    <!-- Menu Content -->
    <div class="menu-content">
      <div
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        class="category-section"
      >
        <!-- Category Title -->
        <div class="category-title" :data-category="category.id">
          <h2>{{ $t(category.titleKey) }}</h2>
        </div>

        <!-- Menu Items -->
        <div class="menu-items-container">
          <MenuItemCard
            v-for="item in getCategoryItems(category.id)"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :image="item.image"
            :item="item"
            @click="openMealDialog"
          />
        </div>
      </div>
    </div>

    <!-- Meal Detail Dialog -->
    <MealDetailDialog
      :is-open="isDialogOpen"
      :meal="selectedMeal"
      @close="closeMealDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { categories } from '~/data/categories';
import { menuItems } from '~/data/menuItems';
import type { MenuItem } from '~/data/menuItems';

const route = useRoute();
const activeCategory = ref('cold-appetizers');
const isDialogOpen = ref(false);
const selectedMeal = ref<MenuItem | null>(null);

// Get items for a specific category
const getCategoryItems = (categoryId: string) => {
  return menuItems.filter(item => item.category === categoryId);
};

// Navigation functions
const navigateToCategories = () => {
  navigateTo('/');
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const scrollToCategory = (categoryId: string) => {
  const element = document.getElementById(categoryId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Dialog functions
const openMealDialog = (meal: MenuItem) => {
  selectedMeal.value = meal;
  isDialogOpen.value = true;
  // Prevent body scroll when dialog is open
  document.body.style.overflow = 'hidden';
};

const closeMealDialog = () => {
  isDialogOpen.value = false;
  selectedMeal.value = null;
  // Restore body scroll
  document.body.style.overflow = 'auto';
};

// Handle item click from search
const handleItemClick = (item: MenuItem) => {
  // Scroll to the item's category
  scrollToCategory(item.category);
  // Open the meal dialog
  openMealDialog(item);
};

// Intersection Observer for tracking active category
let observer: IntersectionObserver | null = null;
let scrollTimeout: number | null = null;

const setupIntersectionObserver = () => {
  observer = new IntersectionObserver(
    (entries) => {
      // Clear previous timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Debounce the category update to prevent flickering
      scrollTimeout = setTimeout(() => {
        const visibleCategories = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => ({
            id: entry.target.id,
            rect: entry.boundingClientRect,
            intersectionRatio: entry.intersectionRatio
          }))
          .filter(cat => cat.intersectionRatio > 0.1); // Only consider significantly visible categories

        if (visibleCategories.length === 0) return;

        // Find the category title that's most visible in the upper part of the screen
        const navHeight = 120; // Approximate height of CategoryNavigation
        const viewportHeight = window.innerHeight;
        const upperThreshold = navHeight + (viewportHeight - navHeight) * 0.3; // 30% of remaining viewport

        let bestCategory = visibleCategories[0];
        let bestScore = 0;

        visibleCategories.forEach(category => {
          const titleElement = document.querySelector(`[data-category="${category.id}"]`);
          if (titleElement) {
            const titleRect = titleElement.getBoundingClientRect();
            
            // Check if the title is in the upper part of the screen
            if (titleRect.top >= navHeight && titleRect.bottom <= upperThreshold) {
              // Calculate score based on visibility and position
              const visibilityScore = category.intersectionRatio;
              const positionScore = 1 - Math.abs(titleRect.top - navHeight) / (upperThreshold - navHeight);
              const totalScore = visibilityScore * 0.7 + positionScore * 0.3;
              
              if (totalScore > bestScore) {
                bestScore = totalScore;
                bestCategory = category;
              }
            }
          }
        });

        // Update active category if it changed
        if (bestCategory && bestCategory.id !== activeCategory.value) {
          activeCategory.value = bestCategory.id;
        }
      }, 100); // 100ms debounce
    },
    {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      rootMargin: '-120px 0px -50% 0px' // Account for navigation height
    }
  );

  // Observe all category sections
  categories.forEach(category => {
    const element = document.getElementById(category.id);
    if (element && observer) {
      observer.observe(element);
    }
  });
};

const cleanupIntersectionObserver = () => {
  if (observer) {
    observer.disconnect();
  }
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
};

// Handle initial scroll to category from URL hash
const handleInitialScroll = () => {
  const hash = route.hash.replace('#', '');
  if (hash && categories.some(cat => cat.id === hash)) {
    activeCategory.value = hash;
    nextTick(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
};

onMounted(() => {
  setupIntersectionObserver();
  handleInitialScroll();
});

onUnmounted(() => {
  cleanupIntersectionObserver();
  // Ensure body scroll is restored
  document.body.style.overflow = 'auto';
});
</script>

<style >
@import '~/assets/css/menu.css';
.bbb{
    background-color: #031c12 !important;
}
</style>
