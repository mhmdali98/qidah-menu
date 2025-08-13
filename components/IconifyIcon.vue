<template>
  <Icon 
    :icon="icon" 
    :width="width" 
    :height="height" 
    :class="iconClass"
    :style="iconStyle"
  />
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: 20
  },
  height: {
    type: [String, Number],
    default: 20
  },
  iconClass: {
    type: String,
    default: ''
  },
  iconStyle: {
    type: Object,
    default: () => ({})
  }
})
</script>
