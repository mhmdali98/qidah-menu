import { ref, onMounted } from 'vue';
import type { ApiCategory } from '~/types/menu';
import { useApi } from './useApi';

export const useCategories = () => {
  const categories = ref<ApiCategory[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const selectedCategory = ref<string>('');

  const { fetchCategories } = useApi();

  const loadCategories = async (search?: string) => {
    loading.value = true;
    error.value = null;
    
    try {
      const data = await fetchCategories(search);
      categories.value = data;
    } catch (err) {
      error.value = 'فشل في تحميل الفئات';
      console.error('Error loading categories:', err);
    } finally {
      loading.value = false;
    }
  };

  const selectCategory = (categoryId: string) => {
    selectedCategory.value = categoryId;
    console.log('Selected category:', categoryId);
  };

  const handleSearch = (searchTerm: string) => {
    console.log('Search functionality triggered:', searchTerm);
    loadCategories(searchTerm);
  };

  const getCategories = (): ApiCategory[] => {
    return categories.value;
  };

  onMounted(() => {
    loadCategories();
  });

  return {
    categories,
    loading,
    error,
    selectedCategory,
    selectCategory,
    handleSearch,
    getCategories,
    loadCategories
  };
};
