<template>
  <div class="menu-page">
    <!-- Header -->
    <CategoriesHeader @search="handleSearch" @item-click="handleItemClick" />

    <!-- Category Header with Back Button -->
    <div style="text-align: center">
      <button class="back-button" @click="goBack">
        <span>الرجوع للقائمة</span>
        <IconifyIcon icon="mdi:arrow-left" class="back-icon" />
      </button>
    </div>
    <div style="text-align: center">
      <h1 class="category-title-main">
        {{ $t(currentCategory?.titleKey || "") }}
      </h1>
    </div>

    <!-- Horizontal Menu Items Display -->
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

              <!-- Additional Description -->
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
import { ref, onMounted, onUnmounted, nextTick, computed } from "vue";
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

// Close expansion
const closeExpansion = () => {
  expandedItem.value = null;
};

// Handle initial category from URL
const handleInitialSetup = () => {
  const hash = route.hash.replace("#", "");
  if (hash && categories.some((cat) => cat.id === hash)) {
    // Category is already set via computed
  }
};

onMounted(() => {
  handleInitialSetup();
});
</script>

<style>
@import "~/assets/css/menu.css";

/* Menu Page Styles */
.menu-page {
  min-height: 100vh;
  background: #ffffff;
  text-align: center;
}

/* Category Header Styles */
.category-header {
  background: #06923e;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

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

.item-description {
  color: #666;
  font-size: 14px;
  margin: 0 0 15px 0;
  line-height: 1.5;
  direction: rtl;
  text-align: center;
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
.expanded-details {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.details-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, #06923e, transparent);
  margin: 15px 0;
}

.details-info {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 20px 0;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  font-size: 14px;
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

.close-expansion-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #199a4c;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  transition: all 0.3s ease;
  margin: 15px auto 0;
}

.close-expansion-button:hover {
  background: #158a42;
  transform: translateY(-1px);
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

  .details-info {
    flex-direction: column;
    gap: 15px;
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

.bbb {
  background-color: #031c12 !important;
}
</style>
