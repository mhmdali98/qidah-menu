<template>
  <header
    class="z-40"
    :class="{ dark: store.semidark && store.menu === 'horizontal' }"
  >
    <div class="shadow-sm">
      <div
        class="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-[#0a0d12]"
      >
        <div
          class="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden"
        >
          <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
            <img
              class="inline w-8 ltr:-ml-1 rtl:-mr-1"
              src="/assets/images/logo.svg"
              alt=""
            />
            <span
              class="hidden align-middle text-2xl font-semibold transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline"
              >Qidah Restaurant</span
            >
          </NuxtLink>

          <!-- <a
            href="javascript:;"
            class="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
            @click="store.toggleSidebar()"
          >
            <IconifyIcon icon="lucide:menu" class="h-5 w-5" />
          </a> -->
        </div>

        <div
          class="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2"
        >
          <!-- Theme Toggle -->
          <div>
            <a
              href="javascript:;"
              v-show="store.theme === 'light'"
              class="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
              @click="store.toggleTheme('dark')"
            >
              <IconifyIcon icon="lucide:sun" class="h-5 w-5" />
            </a>
            <a
              href="javascript:;"
              v-show="store.theme === 'dark'"
              class="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
              @click="store.toggleTheme('light')"
            >
              <IconifyIcon icon="lucide:moon" class="h-5 w-5" />
            </a>
          </div>

          <!-- Language Toggle -->
          <div>
            <a
              href="javascript:;"
              v-show="store.locale === 'en'"
              class="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
              @click="changeLanguage({ code: 'ar', name: 'Arabic' })"
            >
              <img
                src="/assets/images/flags/AR.svg"
                alt="Arabic"
                class="h-5 w-5 rounded-full object-cover"
              />
            </a>
            <a
              href="javascript:;"
              v-show="store.locale === 'ar'"
              class="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
              @click="changeLanguage({ code: 'en', name: 'English' })"
            >
              <img
                src="/assets/images/flags/EN.svg"
                alt="English"
                class="h-5 w-5 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/stores/index";

const store = useAppStore();
const route = useRoute();
const { locale } = useI18n();

// multi language
const changeLanguage = (item: any) => {
  console.log('Changing language to:', item.code);
  
  // Update i18n locale
  locale.value = item.code;
  
  // Update store
  store.locale = item.code;
  localStorage.setItem('i18n_locale', item.code);
  
  // Update RTL
  if (item.code === 'ar') {
    store.toggleRTL('rtl');
  } else {
    store.toggleRTL('ltr');
  }

};

const currentFlag = computed(() => {
  return `/assets/images/flags/${store.locale?.toUpperCase()}.svg`;
});

onMounted(() => {
  setActiveDropdown();
});

watch(route, () => {
  setActiveDropdown();
});

const setActiveDropdown = () => {
  const selector = document.querySelector(
    'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
  );
  if (selector) {
    selector.classList.add("active");
    const all: any = document.querySelectorAll(
      "ul.horizontal-menu .nav-link.active"
    );
    for (let i = 0; i < all.length; i++) {
      all[0]?.classList.remove("active");
    }
    const ul: any = selector.closest("ul.sub-menu");
    if (ul) {
      let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
      if (ele) {
        ele = ele[0];
        setTimeout(() => {
          ele?.classList.add("active");
        });
      }
    }
  }
};
</script>
