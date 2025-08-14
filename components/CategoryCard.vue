<template>
  <div class="category-card" @click="$emit('select', category)">
    <img :src="`/reg/img${randomNumber}.svg`" alt="Category Icon" class="category-reg" />
    <div class="category-icon">
      <IconifyIcon :icon="icon" class="w-16 h-16" />
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
const randomNumber = Math.floor(Math.random() * 5) + 1;
</script>
