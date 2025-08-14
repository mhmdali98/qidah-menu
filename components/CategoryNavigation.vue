<template>
  <div class="category-navigation">
    <div class="category-buttons-container">
      <div class="category-buttons" ref="buttonsContainer">
        <button
          v-for="category in mainCategories"
          :key="category.id"
          class="category-button"
          :class="getCategoryButtonClass(category.id)"
          @click="handleCategoryClick(category.id)"
        >
          <span class="category-text-nav">{{ category.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MenuItem } from "~/data/menuItems";

interface Props {
  selectedCategory: string;
}

interface Emits {
  "back-to-categories": [];
  "scroll-to-top": [];
  "select-category": [categoryId: string];
  "item-click": [item: MenuItem];
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const buttonsContainer = ref<HTMLElement>();

// Define the main categories
const mainCategories = [
  {
    id: 'salads',
    title: 'السلطات'
  },
  {
    id: 'appetizers',
    title: 'مقبلات'
  },
  {
    id: 'meat',
    title: 'لحم'
  },
  {
    id: 'chicken',
    title: 'دجاج'
  },
  {
    id: 'seafood',
    title: 'بحريات'
  }
];

const handleItemClick = (item: MenuItem) => {
  emit("item-click", item);
  emit("select-category", item.category);
};

const handleCategoryClick = (categoryId: string) => {
  emit("select-category", categoryId);
};

const getCategoryButtonClass = (categoryId: string) => {
  const baseClass = 'category-button';
  const activeClass = props.selectedCategory === categoryId ? 'active' : '';
  
  // Define color classes for each category
  const colorClasses: Record<string, string> = {
    'salads': 'category-salads',
    'appetizers': 'category-appetizers', 
    'meat': 'category-meat',
    'chicken': 'category-chicken',
    'seafood': 'category-seafood'
  };
  
  return `${baseClass} ${colorClasses[categoryId] || ''} ${activeClass}`;
};
</script>

<style scoped>
.category-navigation {
  top: 0;
  z-index: 1;
  background: transparent;
}

.category-buttons-container {
  overflow: hidden;
}

.category-buttons {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 10px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.category-buttons::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.category-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: 100px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
}

.category-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.category-button.active {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.category-text-nav {
  font-family: 'Cairo', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 18px;
}

/* Category-specific colors */
.category-salads {
  background: #ff6b35; /* Orange */
  color: white;
}

.category-appetizers {
  background: #4caf50; /* Green */
  color: white;
}

.category-meat {
  background: #556b2f; /* Dark olive green */
  color: white;
}

.category-chicken {
  background: #d2691e; /* Brown-orange */
  color: white;
}

.category-seafood {
  background: #ffeb3b; /* Yellow */
  color: #333;
}

@media (max-width: 768px) {
  .category-buttons {
    gap: 8px;
  }

  .category-button {
    padding: 10px 10px;
    font-size: 13px;
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .category-buttons {
    gap: 6px;
  }

  .category-button {
    padding: 5px 5px;
    font-size: 10px;
    min-width: 70px;
  }
}
</style>
