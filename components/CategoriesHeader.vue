<template>
  <div class="header-container">
    <!-- Decorative branches -->
    <div class="branch branch-left">
      <img src="/imageL.svg" alt="Decorative branch left" class="" />
    </div>
    <div class="branch branch-right">
      <img src="/imageR.svg" alt="Decorative branch right" class="" />
    </div>

    <!-- Blue diagonal line -->
    <div class="diagonal-line"></div>

    <!-- Logo and title section -->
    <div class="logo-section">
      <img src="/logo.png" alt="Decorative branch right" class="logo-image" />
    </div>

    <!-- Search bar -->
    <div class="search-container">
      <div class="search-bar">
        <input 
          v-model="searchQuery"
          type="text"
          class="search-input"
          placeholder="ابحث في الأقسام..."
          @input="handleSearch"
          @keyup.enter="handleSearch"
        />
        <div class="search-icon">
          <IconifyIcon icon="mdi:magnify" class="w-5 h-5 text-gray-600" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { MenuItem } from "~/data/menuItems";

interface Props {
  title?: string;
}

interface Emits {
  search: [query: string];
  itemClick: [item: MenuItem];
}

const props = withDefaults(defineProps<Props>(), {
  title: "Categories",
});

const emit = defineEmits<Emits>();

const searchQuery = ref("");

const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>

<style scoped>
.header-container {
  background: white;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Decorative branches */
.branch {
  position: absolute;
  top: 0;
  z-index: 1;
}

.branch-left {
  left: 0;
  top: -10px;
}

.branch-right {
  right: 0;
  top: 0px;
}

.branch-image {
  width: 120px;
  height: auto;
}

/* Logo section */
.logo-section {
  text-align: center;
  margin-top: 2rem;
  z-index: 1;
  position: relative;
}

.logo-image {
  width: 200px;
  height: auto;
  padding-bottom: 10px;
}

/* Search bar */
.search-container {
  width: 100%;
  max-width: 500px;
  z-index: 3;
  position: relative;
}

.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid #06923E;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.search-bar:focus-within {
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
  border-color: #22C55E;
}

.search-icon {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #374151;
  text-align: right;
  direction: rtl;
  padding-right: 10px;
}

.search-input::placeholder {
  color: #9ca3af;
  text-align: right;
}

/* Responsive design */
@media (max-width: 768px) {
  .branch-image {
    width: 80px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2rem;
  }

  .logo-container {
    flex-direction: column;
    gap: 0.25rem;
  }

  .branch-image {
    width: 60px;
  }
}
</style>
