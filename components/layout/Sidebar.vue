<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav class="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
            <div class="h-full bg-white dark:bg-[#0e1726]">
                <div class="flex items-center justify-between px-4 py-3">
                    <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
                        <img class="ml-[5px] w-8 flex-none" src="/assets/images/logo.png" alt="" />
                        <span class="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">Qidah</span>
                    </NuxtLink>
                    <a
                        href="javascript:;"
                        class="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 hover:text-primary rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                        @click="store.toggleSidebar()"
                    >
                        <IconifyIcon icon="lucide:chevrons-down" class="m-auto rotate-90" />
                    </a>
                </div>
                <div class="relative h-[calc(100vh-80px)] overflow-y-auto">
                    <ul class="relative space-y-0.5 p-4 py-0 font-semibold">
                        <li class="nav-item">
                            <NuxtLink 
                                to="/" 
                                class="nav-link group" 
                                @click="toggleMobileMenu"
                            >
                                <div class="flex items-center">
                                    <IconifyIcon icon="lucide:menu" class="shrink-0 group-hover:!text-primary" />
                                    <span class="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">
                                        {{ $t('menu') }}
                                    </span>
                                </div>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import { useAppStore } from '@/stores/index';

    const store = useAppStore();

    onMounted(() => {
        setTimeout(() => {
            const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');

            if (selector) {
                selector.classList.add('active');
            }
        });
    });

    const toggleMobileMenu = () => {
        if (window.innerWidth < 1024) {
            store.toggleSidebar();
        }
    };
</script>
