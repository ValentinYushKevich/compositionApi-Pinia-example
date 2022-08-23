import { defineStore } from 'pinia';
import i18n from '@/plugin/i18n';
import LangType from '@/types/lang';

const useLanguageStore = defineStore('language', {
  state() {
    return {
      lang: 'ru' as string,
    };
  },
  actions: {
    changeLanguage(lang:LangType = 'ru'):void {
      this.lang = lang;
      i18n.global.locale = lang;
    },
    checkLanguage():void {
      const curLang = localStorage.getItem('lang');
      if (curLang) this.lang = curLang;
    },
  },
});

export default useLanguageStore;
