import { defineStore } from 'pinia';

const useLanguageStore = defineStore('language', {
  state() {
    return {
      lang: 'ru',
    };
  },
  actions: {
    changeLanguage(lang = 'ru') {
      this.lang = lang;
    },
  },
});

export default useLanguageStore;
