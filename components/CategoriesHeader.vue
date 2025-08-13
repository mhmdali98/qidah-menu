<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="search-icon" @click="$emit('search')">
      <IconifyIcon icon="mdi:magnify" class="w-6 h-6" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Categories'
});

defineEmits<{
  search: [];
}>();
</script>
