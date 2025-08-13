<template>
  <div v-if="isOpen" class="search-dialog-overlay" @click="closeDialog">
    <div class="search-dialog" @click.stop>
      <!-- Header -->
      <div class="search-header">
        <div class="search-input-container">
          <IconifyIcon icon="mdi:magnify" class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('search_placeholder')"
            class="search-input"
            @input="handleSearch"
            ref="searchInput"
          />
        </div>
        <button class="close-button" @click="closeDialog">
          <IconifyIcon icon="mdi:arrow-left" class="close-icon" />
        </button>
      </div>

      <!-- Title -->
      <h1 class="dialog-title">{{ $t('search_title') }}</h1>

      <!-- Search Results -->
      <div class="search-results">
        <div v-if="searchQuery && filteredItems.length === 0" class="no-results">
          <p>{{ $t('no_search_results') }}</p>
        </div>
        <div v-else-if="searchQuery && filteredItems.length > 0" class="results-list">
          <MenuItemCard
            v-for="item in filteredItems"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :image="item.image"
            :item="item"
            @click="handleItemClick"
          />
        </div>
        <div v-else class="recent-items">
          <MenuItemCard
            v-for="item in recentItems"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :price="item.price"
            :image="item.image"
            :item="item"
            @click="handleItemClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { menuItems } from '~/data/menuItems';
import type { MenuItem } from '~/data/menuItems';

interface Props {
  isOpen: boolean;
}

interface Emits {
  close: [];
  itemClick: [item: MenuItem];
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const searchQuery = ref('');
const searchInput = ref<HTMLInputElement>();

// Recent items (you can customize this based on your needs)
const recentItems = computed(() => menuItems.slice(0, 5));

// Filtered items based on search query
const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return [];
  
  const query = searchQuery.value.toLowerCase();
  return menuItems.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
});

// Handle search input
const handleSearch = () => {
  // Search is handled automatically by computed property
};

// Handle item click
const handleItemClick = (item: MenuItem) => {
  emit('itemClick', item);
  closeDialog();
};

// Close dialog
const closeDialog = () => {
  searchQuery.value = '';
  emit('close');
};

// Focus search input when dialog opens
watch(() => props.isOpen, (newValue: boolean) => {
  if (newValue) {
    nextTick(() => {
      searchInput.value?.focus();
    });
  }
});
</script>

<style scoped>
.search-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.search-dialog {
  background: #3e664b;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.search-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.search-input-container {
  flex: 1;
  position: relative;
  background: #e59e60;
  border-radius: 25px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-icon {
  color: #3e664b;
  width: 20px;
  height: 20px;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #3e664b;
  font-size: 16px;
  font-weight: 500;
}

.search-input::placeholder {
  color: #3e664b;
  opacity: 0.7;
}

.close-button {
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.close-icon {
  width: 24px;
  height: 24px;
}

.dialog-title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0 0 20px 0;
}

.search-results {
  flex: 1;
}

.no-results {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  padding: 40px 20px;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.recent-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.recent-title {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px 0;
  text-align: center;
}

/* Custom scrollbar */
.search-dialog::-webkit-scrollbar {
  width: 6px;
}

.search-dialog::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.search-dialog::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.search-dialog::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 480px) {
  .search-dialog-overlay {
    padding: 10px;
  }
  
  .search-dialog {
    padding: 15px;
  }
  
  .search-header {
    gap: 10px;
  }
  
  .search-input-container {
    padding: 10px 15px;
  }
  
  .dialog-title {
    font-size: 20px;
  }
}
</style>
