export interface Category {
  id: string;
  titleKey: string;
  icon: string;
}

export const categories: Category[] = [
  // Row 1
  {
    id: 'cold-appetizers',
    titleKey: 'cold_appetizers',
    icon: 'mdi:bowl-mix'
  },
  {
    id: 'hot-appetizers',
    titleKey: 'hot_appetizers',
    icon: 'mdi:bowl-mix-outline'
  },
  {
    id: 'soups-salads',
    titleKey: 'soups_salads',
    icon: 'ph:bowl-food-duotone'
  },
  
  // Row 2
  {
    id: 'western-grilled',
    titleKey: 'western_grilled',
    icon: 'mdi:food-steak'
  },
  {
    id: 'seafood',
    titleKey: 'seafood',
    icon: 'mdi:fish'
  },
  {
    id: 'kebabs-iranian',
    titleKey: 'kebabs_iranian',
    icon: 'mdi:food-kebab'
  },
  
  // Row 3
  {
    id: 'pizza',
    titleKey: 'pizza',
    icon: 'mdi:pizza'
  },
  {
    id: 'burger-taco-pasta',
    titleKey: 'burger_taco_pasta',
    icon: 'mdi:hamburger'
  },
  {
    id: 'special-makhtil',
    titleKey: 'special_makhtil',
    icon: 'mdi:glass-cocktail'
  },
  
  // Row 4
  {
    id: 'mocktails',
    titleKey: 'mocktails',
    icon: 'mdi:glass-mug-variant'
  },
  {
    id: 'shakes',
    titleKey: 'shakes',
    icon: 'mdi:cup'
  },
  {
    id: 'smoothie',
    titleKey: 'smoothie',
    icon: 'mdi:cup-water'
  },
  
  // Row 5
  {
    id: 'natural-juices',
    titleKey: 'natural_juices',
    icon: 'mdi:fruit-citrus'
  },
  {
    id: 'cold-coffee',
    titleKey: 'cold_coffee',
    icon: 'mdi:coffee'
  },
  {
    id: 'hot-drinks',
    titleKey: 'hot_drinks',
    icon: 'mdi:coffee-outline'
  }
];
