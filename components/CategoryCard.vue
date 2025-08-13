<template>
  <div class="category-card" @click="$emit('select', category)">
    <div class="category-icon">
      <IconifyIcon :icon="icon" class="w-8 h-8" />
    </div>
    <span class="category-text">{{ title }}</span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  category: string;
  title: string;
  icon: string;
}

defineProps<Props>();
defineEmits<{
  select: [category: string];
}>();
</script>
