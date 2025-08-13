# Qidah Restaurant Menu

A modern, responsive restaurant menu website built with Nuxt 3, Vue 3, and Tailwind CSS.

## Features

- 🌙 **Dark Mode Support** - Toggle between light and dark themes
- 🌍 **Multi-language Support** - English and Arabic with RTL support
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🍽️ **Beautiful Menu Display** - Organized by categories with detailed information
- ⚡ **Fast Performance** - Built with modern web technologies

## Menu Categories

- **Appetizers** - Hummus, Falafel, Baba Ganoush
- **Main Courses** - Shawarma Plate, Kebab Mix, Mansaf
- **Desserts** - Baklava, Kunafa, Umm Ali
- **Beverages** - Arabic Coffee, Mint Tea, Ayran

## Tech Stack

- **Framework**: Nuxt 3
- **Frontend**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Internationalization**: @nuxtjs/i18n
- **Icons**: @iconify/vue

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qidah-menu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
qidah-menu/
├── components/          # Vue components
│   └── layout/         # Layout components (Header, Sidebar, Footer)
├── locales/            # Translation files
│   ├── en.json         # English translations
│   └── ar.json         # Arabic translations
├── pages/              # Application pages
│   └── index.vue       # Main menu page
├── stores/             # Pinia stores
├── assets/             # Static assets
└── public/             # Public files
```

## Customization

### Adding Menu Items

Edit the menu data in `pages/index.vue`:

```javascript
const appetizers = ref([
  {
    id: 1,
    name: 'New Item',
    description: 'Description here',
    price: '$9.99',
    calories: 300,
    spiceLevel: 2
  }
]);
```

### Adding Languages

1. Add new language file in `locales/` directory
2. Update `nuxt.config.ts`:

```javascript
i18n: {
  locales: [
    { code: 'en', file: 'en.json' },
    { code: 'ar', file: 'ar.json' },
    { code: 'fr', file: 'fr.json' } // New language
  ],
  // ...
}
```

3. Add language to store in `stores/index.ts`:

```javascript
languageList: [
  { code: 'en', name: 'English' },
  { code: 'ar', name: 'Arabic' },
  { code: 'fr', name: 'French' } // New language
]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team.
