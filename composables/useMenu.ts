import { ref, computed, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ApiCategory, ApiMenuItem } from "~/types/menu";
import { useApi } from "./useApi";

export const useMenu = () => {
  const route = useRoute();
  const router = useRouter();
  const expandedItem = ref<string | null>(null);
  
  // API state
  const categories = ref<ApiCategory[]>([]);
  const menuItems = ref<ApiMenuItem[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  
  const { fetchCategories, fetchMenuItems } = useApi();

  // Get category from route hash or default to first category
  const currentCategoryId = computed(() => {
    const hash = route.hash.replace("#", "");
    const result = hash || categories.value[0]?.id?.toString() || "";
    console.log('Current category ID computed:', result, 'hash:', hash, 'first category:', categories.value[0]?.id);
    return result;
  });

  // Get current category
  const currentCategory = computed(() => {
    const category = categories.value.find((cat) => cat.id.toString() === currentCategoryId.value);
    console.log('Current category found:', category);
    return category;
  });

  // Get items for current category
  const currentCategoryItems = computed(() => {
    console.log('Current category items:', menuItems.value);
    return menuItems.value;
  });

  // Load categories
  const loadCategories = async () => {
    console.log('Loading categories...');
    try {
      const data = await fetchCategories();
      console.log('Categories loaded:', data);
      categories.value = data;
      
      // Load items for current category after categories are loaded
      await nextTick();
      await loadItemsForCurrentCategory();
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  // Load items for current category
  const loadItemsForCurrentCategory = async () => {
    const categoryId = currentCategoryId.value;
    console.log('Loading items for current category:', categoryId);
    
    if (categoryId && categories.value.length > 0) {
      const parsedId = parseInt(categoryId);
      if (!isNaN(parsedId)) {
        await loadMenuItems(parsedId);
      } else if (categories.value[0]) {
        // If no category ID in URL, load first category
        console.log('Loading first category items:', categories.value[0].id);
        await loadMenuItems(categories.value[0].id);
      }
    }
  };

  // Load menu items for current category
  const loadMenuItems = async (categoryId: number, search?: string) => {
    console.log('Loading menu items for category:', categoryId, 'search:', search);
    loading.value = true;
    error.value = null;
    
    try {
      const data = await fetchMenuItems(categoryId, search);
      console.log('Loaded menu items:', data);
      menuItems.value = data;
    } catch (err) {
      error.value = 'فشل في تحميل المحتويات';
      console.error('Error loading menu items:', err);
    } finally {
      loading.value = false;
    }
  };

  // Handle search from header
  const handleSearch = async (query: string) => {
    if (currentCategory.value) {
      await loadMenuItems(currentCategory.value.id, query);
    }
  };

  // Handle item click from header
  const handleItemClick = (item: ApiMenuItem) => {
    // Navigate to the specific category of the clicked item
    navigateTo(`/menu#${item.id}`);
  };

  // Go back to main menu
  const goBack = () => {
    router.push("/");
  };

  // Toggle item expansion
  const toggleItemExpansion = (item: ApiMenuItem) => {
    if (expandedItem.value === item.id.toString()) {
      expandedItem.value = null;
    } else {
      expandedItem.value = item.id.toString();
    }
  };

  // Load initial data
  onMounted(async () => {
    console.log('useMenu mounted');
    await loadCategories();
  });

  return {
    expandedItem,
    currentCategory,
    currentCategoryItems,
    loading,
    error,
    handleSearch,
    handleItemClick,
    goBack,
    toggleItemExpansion,
    loadMenuItems,
    loadItemsForCurrentCategory
  };
};
