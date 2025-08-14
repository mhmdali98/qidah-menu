# Qidah Menu - قائمة قيدح

تطبيق قائمة طعام تفاعلي مبني باستخدام Nuxt.js مع دعم اللغة العربية والإنجليزية.

## الميزات

- 🌐 دعم متعدد اللغات (العربية والإنجليزية)
- 📱 تصميم متجاوب
- 🍽️ عرض منظم للقوائم والفئات
- 🔍 وظيفة بحث
- ✨ تأثيرات بصرية جميلة
- 🎨 تصميم عصري وأنيق

## هيكل المشروع

```
qidah-menu/
├── components/
│   ├── menu/                 # مكونات صفحة القائمة
│   │   ├── MenuHeader.vue    # رأس صفحة القائمة
│   │   ├── MenuItemCard.vue  # بطاقة عنصر القائمة
│   │   ├── MenuItemsGrid.vue # شبكة عناصر القائمة
│   │   └── index.ts          # تصدير المكونات
│   ├── CategoriesHeader.vue  # رأس الفئات
│   ├── CategoryCard.vue      # بطاقة الفئة
│   └── CategoryNavigation.vue # التنقل بين الفئات
├── composables/
│   ├── useCategories.ts      # منطق الفئات
│   └── useMenu.ts           # منطق صفحة القائمة
├── data/
│   ├── categories.ts        # بيانات الفئات
│   └── menuItems.ts         # بيانات عناصر القائمة
├── i18n/
│   └── locales/             # ملفات الترجمة
├── assets/
│   └── css/
│       ├── app.css          # الأنماط العامة
│       ├── menu.css         # أنماط صفحة القائمة
│       └── components.css   # أنماط المكونات
└── pages/
    ├── index.vue            # الصفحة الرئيسية
    └── menu.vue             # صفحة القائمة
```

## التقسيم الجديد

تم تقسيم صفحة القائمة إلى عدة مكونات منفصلة لتحسين التنظيم والقابلية للصيانة:

### المكونات الجديدة:
1. **MenuHeader** - رأس الصفحة مع زر الرجوع وعنوان الفئة
2. **MenuItemCard** - بطاقة عنصر القائمة الفردي
3. **MenuItemsGrid** - شبكة عرض عناصر القائمة

### Composable الجديد:
- **useMenu** - إدارة منطق صفحة القائمة

لمزيد من التفاصيل، راجع [توثيق مكونات القائمة](docs/MENU_COMPONENTS.md).

## التثبيت والتشغيل

```bash
# تثبيت التبعيات
npm install

# تشغيل في وضع التطوير
npm run dev

# بناء للإنتاج
npm run build

# معاينة الإنتاج
npm run preview
```

## التقنيات المستخدمة

- **Nuxt.js 3** - إطار العمل
- **Vue.js 3** - مكتبة الواجهة الأمامية
- **TypeScript** - لغة البرمجة
- **Tailwind CSS** - إطار العمل للتصميم
- **Vue I18n** - الترجمة متعددة اللغات
- **Iconify** - مكتبة الأيقونات

## المساهمة

1. قم بعمل fork للمشروع
2. أنشئ فرع جديد للميزة (`git checkout -b feature/AmazingFeature`)
3. قم بعمل commit للتغييرات (`git commit -m 'Add some AmazingFeature'`)
4. ادفع للفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## الدعم

إذا واجهت أي مشاكل أو لديك اقتراحات، يرجى فتح issue في GitHub.
