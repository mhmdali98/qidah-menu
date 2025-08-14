// Types for menu components
export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
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
