<template>
  <div class="menu-page">
    <!-- Header -->
    <CategoriesHeader @search="handleSearch" @item-click="handleItemClick" />

    <!-- Back Button -->
    <div style="text-align: center">
      <button class="back-button" @click="goBack">
        <span>الرجوع للقائمة</span>
        <IconifyIcon icon="mdi:arrow-left" class="back-icon" />
      </button>
    </div>
    
    <!-- Category Title -->
    <div style="text-align: center">
      <h1 class="category-title-main">
        {{ $t(currentCategory?.titleKey || "") }}
      </h1>
    </div>

    <!-- Menu Items Grid -->
    <div class="menu-items-container">
      <div class="menu-items-grid">
        <div
          v-for="(item, index) in currentCategoryItems"
          :key="index"
          class="menu-item-card"
          :class="{ expanded: expandedItem === item.id }"
          @click="toggleItemExpansion(item)"
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
            <div v-if="expandedItem === item.id" class="">
              <div class="details-divider"></div>
              <div class="additional-description">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { categories } from "~/data/categories";
import { menuItems } from "~/data/menuItems";
import type { MenuItem } from "~/data/menuItems";

const route = useRoute();
const router = useRouter();
const expandedItem = ref<string | null>(null);

// Get category from route hash or default to first category
const currentCategoryId = computed(() => {
  const hash = route.hash.replace("#", "");
  return hash || categories[0]?.id || "";
});

// Get current category
const currentCategory = computed(() => {
  return categories.find((cat) => cat.id === currentCategoryId.value);
});

// Get items for current category
const currentCategoryItems = computed(() => {
  return menuItems.filter((item) => item.category === currentCategoryId.value);
});

// Handle search from header
const handleSearch = (query: string) => {
  // TODO: Implement search functionality
  console.log("Search query:", query);
};

// Handle item click from header
const handleItemClick = (item: MenuItem) => {
  // Navigate to the specific category of the clicked item
  navigateTo(`/menu#${item.category}`);
};

// Go back to main menu
const goBack = () => {
  router.push("/");
};

// Toggle item expansion
const toggleItemExpansion = (item: MenuItem) => {
  if (expandedItem.value === item.id) {
    expandedItem.value = null;
  } else {
    expandedItem.value = item.id;
  }
};
</script>

<style>
@import "~/assets/css/menu.css";

/* Menu Page Styles */
.menu-page {
  min-height: 100vh;
  background: #ffffff;
  text-align: center;
}

/* Back Button Styles */
.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #199a4c;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
  justify-content: center;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.back-icon {
  width: 20px;
  height: 20px;
}

.category-title-main {
  color: #199a4c;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  flex: 1;
  text-align: center;
}

/* Menu Items Container */
.menu-items-container {
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  justify-items: center;
}

/* Menu Item Card */
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

/* Expanded Details */
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

/* Responsive Design */
@media (max-width: 768px) {
  .menu-items-container {
    padding: 20px 15px;
  }

  .menu-items-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

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
  .menu-items-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

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
