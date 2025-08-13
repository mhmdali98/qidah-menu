export interface Category {
  id: string;
  title: string;
  icon: string;
}

export const categories: Category[] = [
  // Row 1
  {
    id: 'cold-appetizers',
    title: 'Cold Appetizers',
    icon: 'mdi:bowl-mix'
  },
  {
    id: 'hot-appetizers',
    title: 'Hot Appetizers',
    icon: 'mdi:bowl-mix-outline'
  },
  {
    id: 'soups-salads',
    title: 'Soups and Salads',
    icon: 'mdi:food-salad'
  },
  
  // Row 2
  {
    id: 'western-grilled',
    title: 'Western and grilled dishes',
    icon: 'mdi:food-steak'
  },
  {
    id: 'seafood',
    title: 'Sea Food',
    icon: 'mdi:fish'
  },
  {
    id: 'kebabs-iranian',
    title: 'Kebabs and Iranian dishes',
    icon: 'mdi:food-kebab'
  },
  
  // Row 3
  {
    id: 'pizza',
    title: 'Pizza',
    icon: 'mdi:pizza'
  },
  {
    id: 'burger-taco-pasta',
    title: 'Burger, Taco, Pasta',
    icon: 'mdi:hamburger'
  },
  {
    id: 'special-makhtil',
    title: 'Special Makhtil',
    icon: 'mdi:glass-cocktail'
  },
  
  // Row 4
  {
    id: 'mocktails',
    title: 'Mocktails',
    icon: 'mdi:glass-mug-variant'
  },
  {
    id: 'shakes',
    title: 'SHAKES',
    icon: 'mdi:cup'
  },
  {
    id: 'smoothie',
    title: 'Smoothie',
    icon: 'mdi:cup-water'
  },
  
  // Row 5
  {
    id: 'natural-juices',
    title: 'Natural Seasonal Juices',
    icon: 'mdi:fruit-citrus'
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee Drinks',
    icon: 'mdi:coffee'
  },
  {
    id: 'hot-drinks',
    title: 'HOT DRINKS BAR',
    icon: 'mdi:coffee-outline'
  }
];
