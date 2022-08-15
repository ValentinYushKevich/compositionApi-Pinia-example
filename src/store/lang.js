import { defineStore } from 'pinia';
import i18n from '@/plugin/i18n';

const useLanguageStore = defineStore('language', {
  state() {
    return {
      lang: 'ru',
    };
  },
  actions: {
    changeLanguage(lang = 'ru') {
      this.lang = lang;
      i18n.global.locale = lang;
    },
    checkLanguage() {
      const curLang = localStorage.getItem('lang');
      if (curLang) this.lang = curLang;
    },
  },
});

export default useLanguageStore;
