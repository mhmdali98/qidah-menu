import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { categories } from "~/data/categories";
import { menuItems } from "~/data/menuItems";
import type { MenuItem } from "~/data/menuItems";

export const useMenu = () => {
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

  return {
    expandedItem,
    currentCategory,
    currentCategoryItems,
    handleSearch,
    handleItemClick,
    goBack,
    toggleItemExpansion,
  };
};
