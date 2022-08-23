import { createI18n } from 'vue-i18n';
import messages from '@/assets/i18n';

const locale = 'ru';
const i18n = createI18n({
  locale,
  messages,
});

export default i18n;
