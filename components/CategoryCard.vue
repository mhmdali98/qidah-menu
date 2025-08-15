<template>
  <div class="category-card" @click="$emit('select', category)">
    <div class="category-icon">
      <img v-if="image" :src="image" :alt="title" class="category-image" />
      <IconifyIcon v-else :icon="icon || 'mdi:food'" class="w-16 h-16" />
    </div>
    <span class="category-text">{{ title }}</span>
    <span v-if="itemsCount" class="items-count">{{ itemsCount }} عنصر</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  category: string;
  title: string;
  icon?: string;
  image?: string;
  itemsCount?: number;
}

defineProps<Props>();
defineEmits<{
  select: [category: string];
}>();
const randomNumber = Math.floor(Math.random() * 5) + 1;
</script>

<style scoped>
.category-image {
  width: 70px;
  height: 70px;
  border-radius: 0.5rem;
}

.items-count {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}
</style>
