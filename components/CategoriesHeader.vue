<template>
  <div class="header">
    <h1 class="title">{{ $t('categories') }}</h1>
    <div class="header-actions">
      
      <div class="search-icon" @click="openSearch">
        <IconifyIcon icon="mdi:magnify" class="w-6 h-6" />
      </div>
    </div>
  </div>
  
  <!-- Search Dialog -->
  <SearchDialog 
    :is-open="isSearchOpen" 
    @close="closeSearch"
    @item-click="handleItemClick"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from '~/data/menuItems';

interface Props {
  title?: string;
}

interface Emits {
  search: [];
  itemClick: [item: MenuItem];
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Categories'
});

const emit = defineEmits<Emits>();

const isSearchOpen = ref(false);

const openSearch = () => {
  isSearchOpen.value = true;
  emit('search');
};

const closeSearch = () => {
  isSearchOpen.value = false;
};

const handleItemClick = (item: MenuItem) => {
  emit('itemClick', item);
};
</script>
