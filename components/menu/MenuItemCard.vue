<template>
  <div
    class="menu-item-card"
    :class="{ expanded: isExpanded }"
    @click="$emit('toggle-expansion', item)"
  >
    <!-- Badge outside the card on the left -->
    <div v-if="item.best" class="badge best-badge outside-badge">الأفضل</div>

    <!-- Horizontal layout (default) -->
    <div v-if="!isExpanded" class="horizontal-layout">
      <div class="menu-item-content">
        <div class="item-header">
          <h3 class="item-title">{{ item.name_ar || item.name }}</h3>
          <div class="item-price">{{ formatPrice(item.price) }} IQD</div>
        </div>
      </div>
      <div class="menu-item-image">
        <img
          :src="item.image"
          :alt="item.name_ar || item.name"
          class="item-image"
        />
        <!-- Only today badge inside image -->
        <div v-if="item.today" class="badge today-badge">اليوم</div>
      </div>
    </div>

    <!-- Vertical layout (expanded) -->
    <div v-if="isExpanded" class="vertical-layout">
      <div class="menu-item-image-expanded">
        <img
          :src="item.image"
          :alt="item.name_ar || item.name"
          class="item-image-expanded"
        />
        <!-- Only today badge inside image -->
        <div v-if="item.today" class="badge today-badge">اليوم</div>
      </div>
      <div class="menu-item-content-expanded">
        <div class="item-header-expanded">
          <h3 class="item-title-expanded">{{ item.name_ar || item.name }}</h3>
          <div class="item-price-expanded">
            {{ formatPrice(item.price) }} IQD
          </div>
        </div>
        <div class="item-ingredients">
          <p>{{ item.description_ar }}</p>
        </div>
        <div class="item-sauce">
          <p>{{ item.sauce_ar }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ApiMenuItem } from "~/types/menu";

interface Props {
  item: ApiMenuItem;
  isExpanded: boolean;
}

defineProps<Props>();
defineEmits<{
  "toggle-expansion": [item: ApiMenuItem];
}>();

const formatPrice = (price: number) => {
  return price.toLocaleString("ar-EG");
};
</script>

<style scoped>
.menu-item-card {
  background: white;
  border: 1px solid #06923e;
  border-radius: 12px;
  overflow: visible;
  width: 100%;
  max-width: 350px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 12px;
}

.menu-item-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.menu-item-card.expanded {
  max-width: 450px;
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
  padding: 0;
}

/* Horizontal Layout */
.horizontal-layout {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 12px;
}

.menu-item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100px;
  align-items: flex-end;
}

.menu-item-image {
  width: 120px;
  height: 120px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  flex-shrink: 0;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Vertical Layout */
.vertical-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.menu-item-image-expanded {
  width: 100%;
  height: 250px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.item-image-expanded {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.menu-item-content-expanded {
  padding: 20px;
  text-align: right;
  direction: rtl;
}

.item-header-expanded {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.item-title-expanded {
  color: #333;
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  direction: rtl;
  text-align: right;
}

.item-price-expanded {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: left;
  direction: ltr;
}

.item-ingredients {
  margin-bottom: 10px;
}

.item-ingredients p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  direction: rtl;
  text-align: right;
}

.item-separator {
  color: #666;
  font-size: 16px;
  text-align: right;
  margin: 10px 0;
  direction: rtl;
}

.item-sauce {
  margin-top: 10px;
}

.item-sauce p {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  direction: rtl;
  text-align: right;
}

.badge {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  z-index: 2;
}

.best-badge {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
}

.today-badge {
  background: linear-gradient(135deg, #26de81, #20bf6b);
}

.item-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  direction: rtl;
  text-align: right;
  width: 100%;
}

.item-title {
  color: #333;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  direction: rtl;
  text-align: right;
  line-height: 1.3;
  width: 100%;
}

.item-price {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-align: right;
  direction: rtl;
  width: 100%;
}

.item-rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 10px 0;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ddd;
  font-size: 16px;
}

.star.filled {
  color: #ffd700;
}

.rating-text {
  font-size: 12px;
  color: #666;
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
    padding: 10px;
  }

  .menu-item-card.expanded {
    max-width: 350px;
  }

  .menu-item-image {
    width: 100px;
    height: 100px;
  }

  .menu-item-image-expanded {
    height: 200px;
  }

  .menu-item-content {
    min-height: 90px;
  }

  .item-title {
    font-size: 15px;
  }

  .item-price {
    font-size: 13px;
  }

  .item-title-expanded {
    font-size: 16px;
  }

  .item-price-expanded {
    font-size: 14px;
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
    width: 80px;
    height: 80px;
  }

  .menu-item-image-expanded {
    height: 180px;
  }

  .menu-item-content {
    min-height: 80px;
  }
}
</style>
