<template>
  <div class="menu-header">
    <!-- Back Button -->
    <div class="back-button-container">
      <button class="back-button" @click="$emit('go-back')">
        <span>الرجوع للقائمة</span>
        <IconifyIcon icon="mdi:arrow-left" class="back-icon" />
      </button>
    </div>
    
    <!-- Category Title -->
    <div class="category-title-container">
      <h1 class="category-title-main">
        {{ categoryTitle }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuHeaderProps, MenuHeaderEmits } from '~/types/menu';

defineProps<MenuHeaderProps>();
defineEmits<MenuHeaderEmits>();
</script>

<style scoped>
.menu-header {
  text-align: center;
  margin-bottom: 20px;
}

.back-button-container {
  margin-bottom: 20px;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #199a4c;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  justify-content: center;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.back-icon {
  width: 20px;
  height: 20px;
}

.category-title-container {
  margin-bottom: 20px;
}

.category-title-main {
  color: #199a4c;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  text-align: center;
}

@media (max-width: 768px) {
  .category-title-main {
    font-size: 24px;
  }
}
</style>
