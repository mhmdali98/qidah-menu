<template>
  <Transition name="dialog">
    <div v-if="isOpen" class="meal-dialog-overlay" @click="closeDialog">
      <div class="meal-dialog" @click.stop>
        <!-- Close Button -->
        <button class="close-button" @click="closeDialog">
          <IconifyIcon icon="mdi:close" class="w-6 h-6" />
        </button>

        <!-- Image Section -->
        <div class="image-section">
          <img :src="meal.image" :alt="meal.title" class="meal-image" />
        </div>

        <!-- Content Section -->
        <div class="content-section">
          <!-- Drag Handle -->
          <div class="drag-handle"></div>
          
          <!-- Title -->
          <h2 class="meal-title">{{ meal.title }}</h2>
          
          <!-- Description -->
          <p class="meal-description">{{ meal.description }}</p>
          
          <!-- Price -->
          <div class="meal-price">{{ meal.price }}</div>
          
          <!-- Additional Info -->
          <div class="meal-info">
            <div class="info-item">
              <IconifyIcon icon="mdi:clock-outline" class="w-5 h-5" />
              <span>{{ $t('quick_preparation') }}</span>
            </div>
            <div class="info-item">
              <IconifyIcon icon="mdi:star" class="w-5 h-5" />
              <span>4.8/5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { MenuItem } from '~/data/menuItems';

interface Props {
  isOpen: boolean;
  meal: MenuItem | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const closeDialog = () => {
  emit('close');
};
</script>

<style>
@import '~/assets/css/dialog.css';
</style>
