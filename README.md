# Qidah Restaurant Menu

قائمة طعام مطعم قيدح - تطبيق ويب بسيط وأنيق لعرض قائمة الطعام

## المميزات

- 🍽️ عرض قائمة الطعام بتصميم جميل ومتجاوب
- 🏷️ تصنيف الأطباق حسب الفئات (سلطات، مقبلات، لحوم، دجاج، بحريات)
- 🌐 دعم اللغتين العربية والإنجليزية
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- ⚡ أداء سريع مع Nuxt 3
- 🎨 تصميم عصري مع Tailwind CSS

## التقنيات المستخدمة

- **Nuxt 3** - إطار عمل Vue.js
- **Vue 3** - إطار عمل الواجهة الأمامية
- **TypeScript** - لكتابة كود آمن ومنظم
- **Tailwind CSS** - لإطار عمل التصميم
- **Pinia** - لإدارة الحالة
- **Iconify** - لأيقونات جميلة
- **i18n** - لدعم اللغات المتعددة

## هيكل المشروع

```
qidah-menu/
├── components/          # مكونات Vue
│   ├── CategoriesHeader.vue
│   ├── CategoryCard.vue
│   ├── CategoryNavigation.vue
│   ├── IconifyIcon.vue
│   └── layout/
│       └── Footer.vue
├── data/               # بيانات التطبيق
│   ├── categories.ts
│   └── menuItems.ts
├── i18n/              # ملفات الترجمة
│   └── locales/
│       ├── ar.json
│       └── en.json
├── pages/             # صفحات التطبيق
│   ├── index.vue      # الصفحة الرئيسية
│   └── menu.vue       # صفحة القائمة
├── stores/            # إدارة الحالة
│   └── index.ts
├── assets/            # الملفات الثابتة
│   └── css/
│       ├── app.css
│       ├── categories.css
│       ├── menu.css
│       ├── rtl.css
│       └── tailwind.css
└── public/            # الملفات العامة
    └── assets/
        └── images/
            ├── favicon.png
            ├── logo.png
            └── flags/
                ├── AR.svg
                └── EN.svg
```

## التثبيت والتشغيل

1. **تثبيت التبعيات:**
   ```bash
   npm install
   ```

2. **تشغيل خادم التطوير:**
   ```bash
   npm run dev
   ```

3. **بناء المشروع للإنتاج:**
   ```bash
   npm run build
   ```

4. **معاينة الإنتاج:**
   ```bash
   npm run preview
   ```

## إضافة أطباق جديدة

لإضافة أطباق جديدة، قم بتعديل ملف `data/menuItems.ts`:

```typescript
export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'new-dish',
    title: 'اسم الطبق الجديد',
    description: 'وصف الطبق',
    price: 15000,
    image: '/path/to/image.jpg',
    category: 'meat' // أو أي فئة أخرى
  }
];
```

## إضافة فئات جديدة

لإضافة فئات جديدة، قم بتعديل ملف `data/categories.ts`:

```typescript
export interface Category {
  id: string;
  titleKey: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'new-category',
    titleKey: 'new.category.title',
    icon: 'mdi:food'
  }
];
```

## الترجمة

لإضافة ترجمات جديدة، قم بتعديل ملفات الترجمة في `i18n/locales/`:

```json
{
  "new.category.title": "اسم الفئة الجديدة"
}
```

## المساهمة

نرحب بالمساهمات! يرجى اتباع هذه الخطوات:

1. Fork المشروع
2. إنشاء فرع جديد للميزة
3. إجراء التغييرات
4. إرسال Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## الدعم

إذا واجهت أي مشاكل أو لديك أسئلة، يرجى فتح issue في GitHub.
