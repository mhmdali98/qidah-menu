import { defineStore } from 'pinia';
import appSetting from '@/app-setting';

export const useAppStore = defineStore('app', {
    state: () => ({
        isDarkMode: false,
        theme: 'light',
        rtlClass: 'ltr',
        animation: '',
        navbar: 'navbar-sticky',
        locale: 'ar',
        sidebar: false,
        isShowMainLoader: true,
    }),

    actions: {
        toggleTheme(payload: any = null) {
            payload = payload || this.theme;
            localStorage.setItem('theme', payload);
            this.theme = payload;
            
            if (payload == 'light') {
                this.isDarkMode = false;
            } else if (payload == 'dark') {
                this.isDarkMode = true;
            } else if (payload == 'system') {
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.isDarkMode = true;
                } else {
                    this.isDarkMode = false;
                }
            }

            if (this.isDarkMode) {
                document.querySelector('body')?.classList.add('dark');
            } else {
                document.querySelector('body')?.classList.remove('dark');
            }
        },

        toggleRTL(payload: any = null) {
            payload = payload || this.rtlClass;
            localStorage.setItem('rtlClass', payload);
            this.rtlClass = payload;
            document.querySelector('html')?.setAttribute('dir', this.rtlClass || 'ltr');
        },

        toggleAnimation(payload: any = null) {
            payload = payload || this.animation;
            payload = payload?.trim();
            localStorage.setItem('animation', payload);
            this.animation = payload;
            appSetting.changeAnimation();
        },

        toggleNavbar(payload: any = null) {
            payload = payload || this.navbar;
            localStorage.setItem('navbar', payload);
            this.navbar = payload;
        },

        toggleLocale(payload: any = null, setLocale: any) {
            payload = payload || this.locale;
            localStorage.setItem('i18n_locale', payload);
            this.locale = payload;
            setLocale(payload);
            
            if(this.locale?.toLowerCase() === 'ar') {
                this.toggleRTL('rtl');
            } else {
                this.toggleRTL('ltr');
            }
        },

        toggleSidebar(state: boolean = false) {
            this.sidebar = !this.sidebar;
        },

        toggleMainLoader(state: boolean = false) {
            this.isShowMainLoader = true;
            setTimeout(() => {
                this.isShowMainLoader = false;
            }, 500);
        },
    },
});
