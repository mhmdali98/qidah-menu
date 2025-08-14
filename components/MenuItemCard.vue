<template>
  <div class="menu-item-card" @click="$emit('click', item)">
    <div class="menu-item-image">
      <img :src="image" :alt="title" class="item-image" />
    </div>
    <div class="menu-item-content">
      <div class="item-header">
        <h3 class="item-title">{{ title }}</h3>
        <div class="item-price"><b>{{ price }}</b> IQD</div>
      </div>
      <p class="item-description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from '~/data/menuItems';

interface Props {
  title: string;
  description: string;
  price: string;
  image: string;
  item: MenuItem;
}

defineProps<Props>();

defineEmits<{
  click: [item: MenuItem];
}>();
</script>

<style scoped>
.menu-item-card {
  background: #ffffff2a;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  gap: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.menu-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: #3e664b;
}

.menu-item-card:active {
  transform: translateY(0);
}

.menu-item-image {
  flex-shrink: 0;
  width: 100px;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  background: #3e664b;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  direction: rtl;
}

.item-title {
  color: white;
  font-size: 18px;
  font-weight: 800;
  margin: 0;
  line-height: 1.3;
  direction: rtl;
  text-align: right;
  flex: 1;
}

.item-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.item-price {
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: left;
  direction: ltr;
}

@media (max-width: 480px) {
  .menu-item-card {
    padding: 12px;
    gap: 12px;
  }
  
  .menu-item-image {
    width: 100px;
    height: 110px;
  }
  
  .item-title {
    font-size: 18px;
    font-weight: 800;
  }
  
  .item-description {
    font-size: 12px;
  }
  
  .item-price {
    font-size: 16px;
  }
}
</style>
