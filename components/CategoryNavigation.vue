<template>
  <div class="category-navigation">
    <div class="nav-header">
      <button class="categories-button" @click="$emit('back-to-categories')">
        <IconifyIcon icon="mdi:view-grid" class="w-5 h-5" />
        <span>Categories</span>
      </button>
      <button class="scroll-top-button" @click="$emit('scroll-to-top')">
        <IconifyIcon icon="mdi:chevron-up" class="w-5 h-5" />
      </button>
    </div>
    
    <div class="category-tabs-container">
      <div class="category-tabs" ref="tabsContainer">
        <button
          v-for="category in categories"
          :key="category.id"
          :ref="el => { if (el) categoryRefs[category.id] = el }"
          class="category-tab"
          :class="{ active: selectedCategory === category.id }"
          @click="$emit('select-category', category.id)"
        >
          <IconifyIcon :icon="category.icon" class="w-5 h-5" />
          <span>{{ category.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue';
import { categories } from '~/data/categories';

interface Props {
  selectedCategory: string;
}

const props = defineProps<Props>();

defineEmits<{
  'back-to-categories': [];
  'scroll-to-top': [];
  'select-category': [categoryId: string];
}>();

const tabsContainer = ref<HTMLElement>();
const categoryRefs: Record<string, HTMLElement> = {};
let scrollTimeout: number | null = null;

// Watch for selected category changes and scroll to it
watch(() => props.selectedCategory, async (newCategory) => {
  await nextTick();
  
  // Clear previous timeout
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  
  // Debounce the scroll to prevent rapid changes
  scrollTimeout = setTimeout(() => {
    scrollToActiveCategory(newCategory);
  }, 150);
}, { immediate: true });

const scrollToActiveCategory = (categoryId: string) => {
  const activeTab = categoryRefs[categoryId];
  const container = tabsContainer.value;
  
  if (activeTab && container) {
    const containerRect = container.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    
    // Calculate the center of the container
    const containerCenter = containerRect.left + containerRect.width / 2;
    const tabCenter = tabRect.left + tabRect.width / 2;
    
    // Calculate the offset to center the tab
    const offset = tabCenter - containerCenter;
    
    // Only scroll if the tab is not already centered (with some tolerance)
    if (Math.abs(offset) > 15) {
      container.scrollTo({
        left: container.scrollLeft + offset,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.category-navigation {
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(135deg, #1a5f3c 0%, #0d2d1b 100%);
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.categories-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #8B4513;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.categories-button:hover {
  background: #A0522D;
}

.scroll-top-button {
  width: 35px;
  height: 35px;
  background: #8B4513;
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.scroll-top-button:hover {
  background: #A0522D;
}

.category-tabs-container {
  overflow: hidden;
}

.category-tabs {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 5px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.category-tabs::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.category-tab:hover {
  background: rgba(255, 255, 255, 0.2);
}

.category-tab.active {
  background: #8B4513;
}

@media (max-width: 480px) {
  .category-navigation {
    padding: 12px 15px;
  }
  
  .nav-header {
    margin-bottom: 12px;
  }
  
  .categories-button {
    padding: 6px 10px;
    font-size: 13px;
  }
  
  .scroll-top-button {
    width: 32px;
    height: 32px;
  }
  
  .category-tabs {
    gap: 8px;
  }
  
  .category-tab {
    padding: 6px 10px;
    font-size: 11px;
  }
}
</style>
