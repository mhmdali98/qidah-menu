// Types for menu components
export interface MenuItem {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
}

export interface Category {
  id: string;
  titleKey: string;
  icon: string;
}

export interface MenuHeaderProps {
  categoryTitle: string;
}

export interface MenuItemCardProps {
  item: MenuItem;
  isExpanded: boolean;
}

export interface MenuItemsGridProps {
  items: MenuItem[];
  expandedItem: string | null;
}

export interface ApiCategory {
  id: number;
  name: string;
  name_ar: string;
  items_count: number;
  image: string;
}

export interface ApiCategoriesResponse {
  categories: ApiCategory[];
}

export interface ApiMenuItem {
  id: number;
  name: string;
  name_ar: string;
  description: string;
  description_ar: string;
  image: string;
  price: number;
  best: boolean;
  today: boolean;
  ratings_count: number;
  average_rating: number;
}

export interface ApiMenuItemsResponse {
  items: ApiMenuItem[];
}

// Events
export interface MenuHeaderEmits {
  'go-back': [];
}

export interface MenuItemCardEmits {
  'toggle-expansion': [item: MenuItem];
}

export interface MenuItemsGridEmits {
  'toggle-expansion': [item: MenuItem];
}
