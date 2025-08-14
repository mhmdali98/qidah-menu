<template>
  <div
    class="menu-item-card"
    :class="{ expanded: isExpanded }"
    @click="$emit('toggle-expansion', item)"
  >
    <div class="menu-item-image">
      <img :src="item.image" :alt="item.title" class="item-image" />
    </div>
    <div class="menu-item-content">
      <div class="item-header">
        <h3 class="item-title">{{ item.title }}</h3>
        <div class="item-price">{{ item.price }} IQD</div>
      </div>

      <!-- Expanded Details -->
      <div v-if="isExpanded" class="expanded-details">
        <div class="details-divider"></div>
        <div class="additional-description">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuItem } from "~/data/menuItems";

interface Props {
  item: MenuItem;
  isExpanded: boolean;
}

defineProps<Props>();
defineEmits<{
  'toggle-expansion': [item: MenuItem];
}>();
</script>

<style scoped>
.menu-item-card {
  background: white;
  border: 2px solid #06923e;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.menu-item-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.menu-item-card.expanded {
  max-width: 450px;
  transform: scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.menu-item-image {
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-item-content {
  padding: 20px;
  text-align: center;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  direction: rtl;
}

.item-title {
  color: #333;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  direction: rtl;
  text-align: right;
  flex: 1;
}

.item-price {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: left;
  direction: ltr;
}

.expanded-details {
  margin-top: 15px;
}

.details-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #06923e, transparent);
  margin: 15px 0;
}

.additional-description {
  margin: 20px 0;
  text-align: center;
}

.additional-description p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 10px 0;
  direction: rtl;
}

@media (max-width: 768px) {
  .menu-item-card {
    max-width: 300px;
  }

  .menu-item-card.expanded {
    max-width: 350px;
  }

  .menu-item-image {
    height: 180px;
  }

  .menu-item-content {
    padding: 15px;
  }

  .item-title {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .menu-item-card {
    max-width: 100%;
  }

  .menu-item-card.expanded {
    max-width: 100%;
  }

  .menu-item-image {
    height: 160px;
  }
}
</style>
