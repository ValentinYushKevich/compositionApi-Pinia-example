<template>
  <div class="header">
    <div class="header__badge">
      <img src="~@/assets/icons/sticker-essentials.png" alt="Logo" />
      CriptoParty
    </div>
    <div class="lang__selector">
      <label for="select"
        >{{ $t('message.selectLang') }}
        <select
          :value="languageState.lang"
          @change="changeLang($event)"
        >
          <option>ru</option>
          <option>en</option>
          <option disabled>sp</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import useLanguageStore from '@/store/lang';

const languageState = useLanguageStore();

function changeLang(lang: any):void {
  languageState.changeLanguage(lang.target.value || 'ru');
  localStorage.setItem('lang', lang.target.value || 'ru');
}

onMounted(():void => {
  languageState.checkLanguage();
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(9, 3, 56);
  min-height: 50px;
  margin-bottom: 20px;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__badge {
    display: flex;
    align-items: center;
    width: 150px;
    img {
      max-width: 100%;
      height: 40px;
      margin-right: 20px;
    }
  }
}
.lang__selector {
  label {
    margin-right: 20px;
  }
  select {
    margin-left: 20px;
  }
}
</style>
