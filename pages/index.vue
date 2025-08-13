<template>
  <div class="restaurant-menu">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-primary mb-2">{{ $t('restaurant_name') }}</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">{{ $t('restaurant_tagline') }}</p>
    
    </div>

    <!-- Menu Categories -->
    <div class="grid gap-8">
      <!-- Appetizers -->
      <div class="menu-section">
        <h2 class="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-2">
          {{ $t('appetizers') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in appetizers" :key="item.id" class="menu-item">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.name }}</h3>
                  <span class="text-lg font-bold text-primary">{{ item.price }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-500">{{ item.calories }} {{ $t('calories') }}</span>
                  <span class="text-xs px-2 py-1 rounded-full" :class="getSpiceClass(item.spiceLevel)">
                    {{ getSpiceText(item.spiceLevel) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Courses -->
      <div class="menu-section">
        <h2 class="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-2">
          {{ $t('main_courses') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in mainCourses" :key="item.id" class="menu-item">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.name }}</h3>
                  <span class="text-lg font-bold text-primary">{{ item.price }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-500">{{ item.calories }} {{ $t('calories') }}</span>
                  <span class="text-xs px-2 py-1 rounded-full" :class="getSpiceClass(item.spiceLevel)">
                    {{ getSpiceText(item.spiceLevel) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desserts -->
      <div class="menu-section">
        <h2 class="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-2">
          {{ $t('desserts') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in desserts" :key="item.id" class="menu-item">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.name }}</h3>
                  <span class="text-lg font-bold text-primary">{{ item.price }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-500">{{ item.calories }} {{ $t('calories') }}</span>
                  <span class="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {{ $t('sweet') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Beverages -->
      <div class="menu-section">
        <h2 class="text-2xl font-semibold mb-6 text-primary border-b-2 border-primary pb-2">
          {{ $t('beverages') }}
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in beverages" :key="item.id" class="menu-item">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ item.name }}</h3>
                  <span class="text-lg font-bold text-primary">{{ item.price }}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">{{ item.description }}</p>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-gray-500 dark:text-gray-500">{{ item.size }}</span>
                  <span class="text-xs px-2 py-1 rounded-full" :class="getDrinkClass(item.type)">
                    {{ getDrinkText(item.type) }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <p class="text-gray-600 dark:text-gray-400">{{ $t('footer_text') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Menu data
const appetizers = ref([
  {
    id: 1,
    name: 'Hummus',
    description: 'Creamy chickpea dip with tahini, olive oil, and warm pita bread',
    price: '$8.99',
    calories: 280,
    spiceLevel: 1
  },
  {
    id: 2,
    name: 'Falafel',
    description: 'Crispy chickpea fritters served with tahini sauce',
    price: '$9.99',
    calories: 320,
    spiceLevel: 2
  },
  {
    id: 3,
    name: 'Baba Ganoush',
    description: 'Smoky roasted eggplant dip with garlic and lemon',
    price: '$7.99',
    calories: 240,
    spiceLevel: 1
  }
]);

const mainCourses = ref([
  {
    id: 1,
    name: 'Shawarma Plate',
    description: 'Marinated chicken or beef with rice, salad, and garlic sauce',
    price: '$16.99',
    calories: 650,
    spiceLevel: 2
  },
  {
    id: 2,
    name: 'Kebab Mix',
    description: 'Mixed grill of lamb, chicken, and beef kebabs with sides',
    price: '$19.99',
    calories: 720,
    spiceLevel: 3
  },
  {
    id: 3,
    name: 'Mansaf',
    description: 'Traditional lamb with rice, yogurt sauce, and pine nuts',
    price: '$22.99',
    calories: 850,
    spiceLevel: 1
  }
]);

const desserts = ref([
  {
    id: 1,
    name: 'Baklava',
    description: 'Layered pastry with nuts and honey syrup',
    price: '$6.99',
    calories: 380
  },
  {
    id: 2,
    name: 'Kunafa',
    description: 'Sweet cheese pastry with syrup and pistachios',
    price: '$7.99',
    calories: 420
  },
  {
    id: 3,
    name: 'Umm Ali',
    description: 'Egyptian bread pudding with nuts and cream',
    price: '$5.99',
    calories: 340
  }
]);

const beverages = ref([
  {
    id: 1,
    name: 'Arabic Coffee',
    description: 'Traditional cardamom coffee served in small cups',
    price: '$3.99',
    size: 'Small',
    type: 'hot'
  },
  {
    id: 2,
    name: 'Mint Tea',
    description: 'Fresh mint tea with sugar',
    price: '$2.99',
    size: 'Medium',
    type: 'hot'
  },
  {
    id: 3,
    name: 'Ayran',
    description: 'Refreshing yogurt drink with salt',
    price: '$2.49',
    size: 'Large',
    type: 'cold'
  }
]);

// Helper functions
const getSpiceClass = (level: number) => {
  const classes = {
    1: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    2: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    3: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };
  return classes[level as keyof typeof classes] || classes[1];
};

const getSpiceText = (level: number) => {
  const texts = {
    1: 'Mild',
    2: 'Medium',
    3: 'Spicy'
  };
  return texts[level as keyof typeof texts] || 'Mild';
};

const getDrinkClass = (type: string) => {
  return type === 'hot' 
    ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
};

const getDrinkText = (type: string) => {
  return type === 'hot' ? 'Hot' : 'Cold';
};
</script>

<style scoped>
.restaurant-menu {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.menu-section {
  margin-bottom: 3rem;
}

.menu-item {
  transition: transform 0.2s ease-in-out;
}

.menu-item:hover {
  transform: translateY(-2px);
}
</style>
