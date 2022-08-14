import { createApp } from 'vue';
import { createPinia } from 'pinia';
import i18n from './plugin/i18n';
import App from './App.vue';
import '@/assets/styles/main.scss';
import router from './router';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(i18n)
  .mount('#app');
