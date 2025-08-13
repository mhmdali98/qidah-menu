import { useAppStore } from '@/stores/index';

const appSetting = {
    init(setLocale: any) {
        const store = useAppStore();
        
        // Initialize theme
        const theme = localStorage.getItem('theme') || 'light';
        store.toggleTheme(theme);
        
        // Initialize language
        const locale = localStorage.getItem('i18n_locale') || 'ar';
        store.toggleLocale(locale, setLocale);
        
        // Initialize RTL
        const rtlClass = localStorage.getItem('rtlClass') || 'rtl';
        store.toggleRTL(rtlClass);
    },

    toggleLanguage(item: any, setLocale: any) {
        const store = useAppStore();
        store.toggleLocale(item.code, setLocale);
    },

    changeAnimation() {
        // Animation logic can be added here if needed
    }
};

export default appSetting;
