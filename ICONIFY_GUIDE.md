# دليل استخدام Iconify في مشروع Qidah Menu

## ما هو Iconify؟

Iconify هو مكتبة توفر أكثر من 100,000 أيقونة من مكتبات مختلفة مثل:
- Material Design Icons (mdi)
- Heroicons (heroicons)
- Lucide (lucide)
- Tabler Icons (tabler)
- Remix Icons (ri)
- Font Awesome (fa-solid, fa-regular, fa-brands)
- Bootstrap Icons (bi)
- Phosphor Icons (ph)
- Carbon Icons (carbon)
- Feather Icons (feather)
- Eva Icons (eva)
- Ant Design Icons (ant-design)

## كيفية الاستخدام

### 1. استخدام المكون المخصص `IconifyIcon`

```vue
<template>
  <IconifyIcon icon="mdi:home" class="text-blue-500" />
  <IconifyIcon icon="heroicons:user" :width="24" :height="24" />
  <IconifyIcon icon="lucide:settings" class="text-purple-500" />
</template>
```

### 2. استخدام مكون `Icon` مباشرة

```vue
<template>
  <Icon icon="mdi:home" />
  <Icon icon="heroicons:user" width="24" height="24" />
  <Icon icon="lucide:settings" class="text-purple-500" />
</template>
```

## خصائص المكون `IconifyIcon`

| الخاصية | النوع | الافتراضي | الوصف |
|---------|-------|-----------|-------|
| `icon` | String | مطلوب | اسم الأيقونة (مثال: `mdi:home`) |
| `width` | String/Number | 20 | عرض الأيقونة |
| `height` | String/Number | 20 | ارتفاع الأيقونة |
| `iconClass` | String | '' | فئات CSS للأيقونة |
| `iconStyle` | Object | {} | أنماط CSS للأيقونة |

## أمثلة على الأيقونات الشائعة

### أيقونات التنقل
```vue
<IconifyIcon icon="mdi:home" /> <!-- الصفحة الرئيسية -->
<IconifyIcon icon="mdi:menu" /> <!-- القائمة -->
<IconifyIcon icon="mdi:arrow-left" /> <!-- السهم للخلف -->
<IconifyIcon icon="mdi:arrow-right" /> <!-- السهم للأمام -->
```

### أيقونات المستخدم
```vue
<IconifyIcon icon="heroicons:user" /> <!-- المستخدم -->
<IconifyIcon icon="heroicons:user-circle" /> <!-- دائرة المستخدم -->
<IconifyIcon icon="heroicons:cog" /> <!-- الإعدادات -->
<IconifyIcon icon="heroicons:bell" /> <!-- الإشعارات -->
```

### أيقونات التفاعل
```vue
<IconifyIcon icon="lucide:heart" /> <!-- القلب -->
<IconifyIcon icon="lucide:star" /> <!-- النجمة -->
<IconifyIcon icon="lucide:share" /> <!-- المشاركة -->
<IconifyIcon icon="lucide:download" /> <!-- التحميل -->
```

### أيقونات التواصل الاجتماعي
```vue
<IconifyIcon icon="fa-brands:facebook" /> <!-- فيسبوك -->
<IconifyIcon icon="fa-brands:twitter" /> <!-- تويتر -->
<IconifyIcon icon="fa-brands:instagram" /> <!-- إنستغرام -->
<IconifyIcon icon="fa-brands:youtube" /> <!-- يوتيوب -->
```

## البحث عن الأيقونات

يمكنك البحث عن الأيقونات في [icones.js.org](https://icones.js.org/) حيث يمكنك:
1. البحث بالكلمات المفتاحية
2. تصفية حسب مكتبة الأيقونات
3. نسخ اسم الأيقونة مباشرة
4. معاينة الأيقونة قبل الاستخدام

## أمثلة عملية

### أيقونة مع حجم مخصص
```vue
<IconifyIcon 
  icon="mdi:home" 
  :width="32" 
  :height="32" 
  class="text-blue-500" 
/>
```

### أيقونة مع أنماط مخصصة
```vue
<IconifyIcon 
  icon="heroicons:heart" 
  :iconStyle="{ color: '#ff0000', fontSize: '24px' }" 
/>
```

### أيقونة مع فئات CSS
```vue
<IconifyIcon 
  icon="lucide:star" 
  iconClass="text-yellow-500 hover:text-yellow-600 transition-colors" 
/>
```

## ملاحظات مهمة

1. **الأداء**: Iconify يحمل الأيقونات عند الطلب فقط، مما يحسن الأداء
2. **التوافق**: جميع الأيقونات متوافقة مع جميع المتصفحات الحديثة
3. **التخصيص**: يمكن تخصيص الألوان والأحجام بسهولة
4. **الاستجابة**: الأيقونات متجاوبة ويمكن تحجيمها بسهولة

## روابط مفيدة

- [موقع Iconify الرسمي](https://iconify.design/)
- [مستكشف الأيقونات](https://icones.js.org/)
- [وثائق Iconify](https://docs.iconify.design/)
- [قائمة مكتبات الأيقونات المدعومة](https://icon-sets.iconify.design/)
