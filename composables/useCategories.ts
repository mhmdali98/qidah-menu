import { ref } from 'vue';
import { categories, type Category } from '~/data/categories';

export const useCategories = () => {
  const selectedCategory = ref<string>('');

  const selectCategory = (categoryId: string) => {
    selectedCategory.value = categoryId;
    console.log('Selected category:', categoryId);
    // هنا يمكن إضافة التنقل إلى صفحة الفئة المحددة
  };

  const handleSearch = () => {
    console.log('Search functionality triggered');
    // هنا يمكن إضافة منطق البحث
  };

  const getCategories = (): Category[] => {
    return categories;
  };

  return {
    selectedCategory,
    selectCategory,
    handleSearch,
    getCategories
  };
};
