# تقسيم صفحة القائمة (Menu Page Structure)

تم تقسيم صفحة القائمة إلى عدة مكونات منفصلة لتحسين التنظيم والقابلية للصيانة.

## المكونات الجديدة

### 1. MenuHeader.vue
**الموقع:** `components/menu/MenuHeader.vue`

**المسؤولية:**
- عرض زر الرجوع للقائمة الرئيسية
- عرض عنوان الفئة الحالية

**الخصائص (Props):**
- `categoryTitle`: عنوان الفئة الحالية

**الأحداث (Events):**
- `go-back`: عند النقر على زر الرجوع

### 2. MenuItemCard.vue
**الموقع:** `components/menu/MenuItemCard.vue`

**المسؤولية:**
- عرض بطاقة عنصر القائمة الفردي
- إدارة حالة التوسيع/الطي
- عرض الصورة والعنوان والسعر والوصف

**الخصائص (Props):**
- `item`: بيانات عنصر القائمة
- `isExpanded`: حالة التوسيع

**الأحداث (Events):**
- `toggle-expansion`: عند النقر على البطاقة

### 3. MenuItemsGrid.vue
**الموقع:** `components/menu/MenuItemsGrid.vue`

**المسؤولية:**
- عرض شبكة عناصر القائمة
- إدارة تخطيط الشبكة المتجاوب

**الخصائص (Props):**
- `items`: مصفوفة عناصر القائمة
- `expandedItem`: معرف العنصر الموسع

**الأحداث (Events):**
- `toggle-expansion`: عند تغيير حالة التوسيع

## Composable الجديد

### useMenu.ts
**الموقع:** `composables/useMenu.ts`

**المسؤولية:**
- إدارة منطق صفحة القائمة
- التعامل مع التوجيه والتنقل
- إدارة حالة العناصر الموسعة
- التعامل مع البحث والنقر على العناصر

**الدوال المتاحة:**
- `expandedItem`: العنصر الموسع حالياً
- `currentCategory`: الفئة الحالية
- `currentCategoryItems`: عناصر الفئة الحالية
- `handleSearch`: معالجة البحث
- `handleItemClick`: معالجة النقر على العنصر
- `goBack`: العودة للصفحة الرئيسية
- `toggleItemExpansion`: تبديل حالة التوسيع

## ملفات CSS

### components.css
**الموقع:** `assets/css/components.css`

**المسؤولية:**
- أنماط المكونات الجديدة
- التصميم المتجاوب
- التأثيرات البصرية

## الصفحة الرئيسية المحدثة

### menu.vue
**الموقع:** `pages/menu.vue`

**التغييرات:**
- استخدام المكونات الجديدة
- استخدام الـ composable الجديد
- تبسيط الكود وإزالة التكرار

## فوائد التقسيم

1. **قابلية الصيانة:** كل مكون مسؤول عن وظيفة محددة
2. **إعادة الاستخدام:** يمكن استخدام المكونات في صفحات أخرى
3. **اختبار أفضل:** يمكن اختبار كل مكون بشكل منفصل
4. **تنظيم أفضل:** فصل المنطق عن العرض
5. **أداء محسن:** تحميل مكونات أصغر

## كيفية الاستخدام

```vue
<template>
  <div class="menu-page">
    <CategoriesHeader @search="handleSearch" @item-click="handleItemClick" />
    
    <MenuHeader 
      :category-title="$t(currentCategory?.titleKey || '')"
      @go-back="goBack"
    />
    
    <MenuItemsGrid
      :items="currentCategoryItems"
      :expanded-item="expandedItem"
      @toggle-expansion="toggleItemExpansion"
    />
  </div>
</template>

<script lang="ts" setup>
const {
  expandedItem,
  currentCategory,
  currentCategoryItems,
  handleSearch,
  handleItemClick,
  goBack,
  toggleItemExpansion,
} = useMenu();
</script>
