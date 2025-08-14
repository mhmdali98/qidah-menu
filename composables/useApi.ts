import type { ApiCategoriesResponse, ApiCategory, ApiMenuItemsResponse, ApiMenuItem } from '~/types/menu';
export const useApi = () => {
  const config = useRuntimeConfig();
  const apiBase = config.public.apiBase;

  const fetchCategories = async (search?: string) => {
    try {
      const url = new URL(`${apiBase}/v1/menus/1/categories`, window.location.origin);
      if (search) url.searchParams.append('search', search);

      const response = await $fetch<ApiCategoriesResponse>(url.toString());
      return response.categories;
    } catch {
      return [];
    }
  };

  const fetchMenuItems = async (categoryId: number, search?: string) => {
    try {
      const url = new URL(`${apiBase}/v1/menus/1/categories/${categoryId}`, window.location.origin);
      if (search) url.searchParams.append('search', search);

      const response = await $fetch<ApiMenuItemsResponse>(url.toString());
      return response.items;
    } catch {
      return [];
    }
  };

  return { fetchCategories, fetchMenuItems };
};
