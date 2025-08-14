import type { ApiCategoriesResponse, ApiCategory, ApiMenuItemsResponse, ApiMenuItem } from '~/types/menu';

export const useApi = () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  console.log('API Base URL:', apiBase);

  const fetchCategories = async (search?: string): Promise<ApiCategory[]> => {
    try {
      const url = new URL(`${apiBase}/v1/menus/1/categories`);
      if (search) {
        url.searchParams.append('search', search);
      }

      console.log('Fetching categories from:', url.toString());
      const response = await $fetch<ApiCategoriesResponse>(url.toString());
      console.log('Categories response:', response);
      return response.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  };

  const fetchMenuItems = async (categoryId: number, search?: string): Promise<ApiMenuItem[]> => {
    try {
      const url = new URL(`${apiBase}/v1/menus/1/categories/${categoryId}`);
      if (search) {
        url.searchParams.append('search', search);
      }

      console.log('Fetching menu items from:', url.toString());
      const response = await $fetch<ApiMenuItemsResponse>(url.toString());
      console.log('Menu items response:', response);
      return response.items;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }
  };

  return {
    fetchCategories,
    fetchMenuItems
  };
};
