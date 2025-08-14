<template>
  <div
    class="menu-item-card"
    :class="{ expanded: isExpanded }"
    @click="$emit('toggle-expansion', item)"
  >
    <div class="menu-item-image">
      <img :src="item.image" :alt="item.name_ar || item.name" class="item-image" />
      <!-- Badges -->
      <div v-if="item.best" class="badge best-badge">الأفضل</div>
      <div v-if="item.today" class="badge today-badge">اليوم</div>
    </div>
    <div class="menu-item-content">
      <div class="item-header">
        <h3 class="item-title">{{ item.name_ar || item.name }}</h3>
        <div class="item-price">{{ formatPrice(item.price) }} IQD</div>
      </div>

      <!-- Rating -->
      <!-- <div v-if="item.ratings_count > 0" class="item-rating">
        <div class="stars">
          <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= Math.round(item.average_rating) }">
            ★
          </span>
        </div>
        <span class="rating-text">({{ item.ratings_count }})</span>
      </div> -->

      <!-- Expanded Details -->
      <div v-if="isExpanded" class="expanded-details">
        <div class="details-divider"></div>
        <div class="additional-description">
          <p v-if="item.description_ar">{{ item.description_ar }}</p>
          <p v-else-if="item.description">{{ item.description }}</p>
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
  'toggle-expansion': [item: ApiMenuItem];
}>();

const formatPrice = (price: number) => {
  return price.toLocaleString('ar-EG');
};
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
  position: relative;
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
  position: relative;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
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
