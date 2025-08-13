export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  // Cold Appetizers
  {
    id: 'yogurt-cucumber',
    title: 'Yogurt with Cucumber',
    description: 'Strained Yogurt Flavored with Rose Petals, Raisins, Walnuts, and Dried Mint',
    price: '17000',
    image: 'https://picsum.photos/80/80?random=1',
    category: 'cold-appetizers'
  },
  {
    id: 'spinach-borani',
    title: 'Spinach Borani',
    description: 'Strained Yogurt Flavored with Blanched Spinach',
    price: '17000',
    image: 'https://picsum.photos/80/80?random=2',
    category: 'cold-appetizers'
  },
  {
    id: 'eggplant-borani',
    title: 'Eggplant Borani',
    description: 'Strained Yogurt Flavored with Smoky Eggplant',
    price: '17000',
    image: 'https://picsum.photos/80/80?random=3',
    category: 'cold-appetizers'
  },
  
  // Hot Appetizers
  {
    id: 'hummus',
    title: 'Hummus',
    description: 'Creamy chickpea dip with tahini, olive oil, and warm pita bread',
    price: '12000',
    image: 'https://picsum.photos/80/80?random=4',
    category: 'hot-appetizers'
  },
  {
    id: 'falafel',
    title: 'Falafel',
    description: 'Crispy chickpea fritters served with tahini sauce',
    price: '15000',
    image: 'https://picsum.photos/80/80?random=5',
    category: 'hot-appetizers'
  },
  {
    id: 'baba-ganoush',
    title: 'Baba Ganoush',
    description: 'Smoky roasted eggplant dip with garlic and lemon',
    price: '14000',
    image: 'https://picsum.photos/80/80?random=6',
    category: 'hot-appetizers'
  },
  
  // Soups and Salads
  {
    id: 'lentil-soup',
    title: 'Lentil Soup',
    description: 'Traditional lentil soup with herbs and spices',
    price: '10000',
    image: 'https://picsum.photos/80/80?random=7',
    category: 'soups-salads'
  },
  {
    id: 'fattoush-salad',
    title: 'Fattoush Salad',
    description: 'Fresh vegetable salad with toasted pita bread',
    price: '13000',
    image: 'https://picsum.photos/80/80?random=8',
    category: 'soups-salads'
  },
  
  // Western and grilled dishes
  {
    id: 'grilled-steak',
    title: 'Grilled Steak',
    description: 'Premium beef steak grilled to perfection',
    price: '45000',
    image: 'https://picsum.photos/80/80?random=9',
    category: 'western-grilled'
  },
  {
    id: 'chicken-breast',
    title: 'Grilled Chicken Breast',
    description: 'Tender chicken breast with herbs and spices',
    price: '28000',
    image: 'https://picsum.photos/80/80?random=10',
    category: 'western-grilled'
  },
  
  // Sea Food
  {
    id: 'grilled-salmon',
    title: 'Grilled Salmon',
    description: 'Fresh salmon fillet grilled with lemon and herbs',
    price: '38000',
    image: 'https://picsum.photos/80/80?random=11',
    category: 'seafood'
  },
  {
    id: 'shrimp-kebab',
    title: 'Shrimp Kebab',
    description: 'Marinated shrimp skewers grilled to perfection',
    price: '32000',
    image: 'https://picsum.photos/80/80?random=12',
    category: 'seafood'
  },
  
  // Kebabs and Iranian dishes
  {
    id: 'lamb-kebab',
    title: 'Lamb Kebab',
    description: 'Traditional lamb kebab with saffron rice',
    price: '29000',
    image: 'https://picsum.photos/80/80?random=13',
    category: 'kebabs-iranian'
  },
  {
    id: 'chicken-kebab',
    title: 'Chicken Kebab',
    description: 'Marinated chicken kebab with grilled vegetables',
    price: '25000',
    image: 'https://picsum.photos/80/80?random=14',
    category: 'kebabs-iranian'
  },
  
  // Pizza
  {
    id: 'margherita-pizza',
    title: 'Margherita Pizza',
    description: 'Classic pizza with tomato sauce, mozzarella, and basil',
    price: '22000',
    image: 'https://picsum.photos/80/80?random=15',
    category: 'pizza'
  },
  {
    id: 'pepperoni-pizza',
    title: 'Pepperoni Pizza',
    description: 'Pizza topped with pepperoni, cheese, and tomato sauce',
    price: '24000',
    image: 'https://picsum.photos/80/80?random=16',
    category: 'pizza'
  },
  
  // Burger, Taco, Pasta
  {
    id: 'classic-burger',
    title: 'Classic Burger',
    description: 'Beef burger with lettuce, tomato, and special sauce',
    price: '18000',
    image: 'https://picsum.photos/80/80?random=17',
    category: 'burger-taco-pasta'
  },
  {
    id: 'chicken-taco',
    title: 'Chicken Taco',
    description: 'Soft taco filled with grilled chicken and vegetables',
    price: '16000',
    image: 'https://picsum.photos/80/80?random=18',
    category: 'burger-taco-pasta'
  },
  
  // Special Makhtil
  {
    id: 'special-drink',
    title: 'Special Makhtil',
    description: 'Unique blend of fresh fruits and herbs',
    price: '9000',
    image: 'https://picsum.photos/80/80?random=19',
    category: 'special-makhtil'
  },
  
  // Mocktails
  {
    id: 'virgin-mojito',
    title: 'Virgin Mojito',
    description: 'Fresh mint, lime, and soda water',
    price: '7000',
    image: 'https://picsum.photos/80/80?random=20',
    category: 'mocktails'
  },
  {
    id: 'fruit-punch',
    title: 'Fruit Punch',
    description: 'Mixed fruit juice with sparkling water',
    price: '6500',
    image: 'https://picsum.photos/80/80?random=21',
    category: 'mocktails'
  },
  
  // SHAKES
  {
    id: 'chocolate-shake',
    title: 'Chocolate Shake',
    description: 'Rich chocolate milkshake with whipped cream',
    price: '8500',
    image: 'https://picsum.photos/80/80?random=22',
    category: 'shakes'
  },
  {
    id: 'strawberry-shake',
    title: 'Strawberry Shake',
    description: 'Fresh strawberry milkshake with real fruit',
    price: '8000',
    image: 'https://picsum.photos/80/80?random=23',
    category: 'shakes'
  },
  
  // Smoothie
  {
    id: 'green-smoothie',
    title: 'Green Smoothie',
    description: 'Spinach, banana, and apple smoothie',
    price: '7500',
    image: 'https://picsum.photos/80/80?random=24',
    category: 'smoothie'
  },
  {
    id: 'berry-smoothie',
    title: 'Berry Smoothie',
    description: 'Mixed berries with yogurt and honey',
    price: '8000',
    image: 'https://picsum.photos/80/80?random=25',
    category: 'smoothie'
  },
  
  // Natural Seasonal Juices
  {
    id: 'orange-juice',
    title: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice',
    price: '6000',
    image: 'https://picsum.photos/80/80?random=26',
    category: 'natural-juices'
  },
  {
    id: 'pomegranate-juice',
    title: 'Pomegranate Juice',
    description: 'Fresh pomegranate juice',
    price: '7000',
    image: 'https://picsum.photos/80/80?random=27',
    category: 'natural-juices'
  },
  
  // Cold Coffee Drinks
  {
    id: 'iced-latte',
    title: 'Iced Latte',
    description: 'Espresso with cold milk and ice',
    price: '9000',
    image: 'https://picsum.photos/80/80?random=28',
    category: 'cold-coffee'
  },
  {
    id: 'cold-brew',
    title: 'Cold Brew Coffee',
    description: 'Smooth cold brewed coffee',
    price: '8500',
    image: 'https://picsum.photos/80/80?random=29',
    category: 'cold-coffee'
  },
  
  // HOT DRINKS BAR
  {
    id: 'espresso',
    title: 'Espresso',
    description: 'Strong Italian espresso',
    price: '5000',
    image: 'https://picsum.photos/80/80?random=30',
    category: 'hot-drinks'
  },
  {
    id: 'cappuccino',
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: '7000',
    image: 'https://picsum.photos/80/80?random=31',
    category: 'hot-drinks'
  }
];
