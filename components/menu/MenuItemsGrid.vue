<template>
  <div class="menu-items-container">
    <div class="menu-items-grid">
      <MenuItemCard
        v-for="(item, index) in items"
        :key="index"
        :item="item"
        :is-expanded="expandedItem === item.id"
        @toggle-expansion="handleToggleExpansion"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/data/menuItems";

interface Props {
  items: MenuItem[];
  expandedItem: string | null;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  'toggle-expansion': [item: MenuItem];
}>();

const handleToggleExpansion = (item: MenuItem) => {
  emit('toggle-expansion', item);
};
</script>

<style scoped>
.menu-items-container {
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  justify-items: center;
}

@media (max-width: 768px) {
  .menu-items-container {
    padding: 20px 15px;
  }

  .menu-items-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .menu-items-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
