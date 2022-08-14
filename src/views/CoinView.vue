<template>
  <div class="coinCard">
    <div class="img__contaner">
      <img class="card__image" alt="Vue logo" :src="imgPath" />
    </div>
    <div class="coin__descr">
      <h2 class="coin__title">
        {{ $t('message.symbol') }} {{ coinStore.coinDisplayInfo.FROMSYMBOL }}
      </h2>
      <div class="coin__marketplace">
        {{ $t('message.tradePlace') }} <span>{{ coinStore.coinDisplayInfo.MARKET }}</span>
      </div>
      <div class="coin__price">
        {{ $t('message.price') }}
        <span>{{ coinStore.coinDisplayInfo.PRICE }}</span>
      </div>
      <div class="coin__change-hour">
        {{ $t('message.reytperhour') }}
        <span :class="hourPriceClasses">{{
          toFixedNum(coinStore.coinRawInfo.CHANGEHOUR, 2)
        }}</span>
      </div>
      <div class="coin__change-day">
        {{ $t('message.reytper24hour') }}
        <span :class="dayPriceClasses">
          {{ toFixedNum(coinStore.coinRawInfo.CHANGE24HOUR, 2) }}
        </span>
      </div>
    </div>
    <button type="button" class="returnButton" @click="returnBack">
      {{ $t('message.back') }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCoinStore } from '@/store/coin';

const route = useRoute();
const coinStore = useCoinStore();
coinStore.getCoinInfo(route.params.coinId);

const imgPath = computed(
  () => `https://www.cryptocompare.com/${coinStore.coinDisplayInfo.IMAGEURL}`,
);

const hourPriceClasses = computed(() => ({
  goodPrice: coinStore.coinRawInfo.CHANGEHOUR > 0,
  badPrice: coinStore.coinRawInfo.CHANGEHOUR < 0,
}));

const dayPriceClasses = computed(() => ({
  goodPrice: coinStore.coinRawInfo.CHANGE24HOUR > 0,
  badPrice: coinStore.coinRawInfo.CHANGE24HOUR < 0,
}));

function toFixedNum(num, fixedParam) {
  if (num) return num.toFixed(fixedParam);
  return 0;
}

const router = useRouter();

function returnBack() {
  router.push('/');
}
</script>

<style lang="scss" scoped>
.coinCard {
  margin: 0px auto;
  border: 1px solid #ccc;
  border-radius: 15px;
  max-width: 1300px;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 40px;
}
.coin__descr {
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 400px;
}
.coin__price,
.coin__change-hour,
.coin__change-day {
  margin-top: 20px;
}
.coin__marketplace,
.coin__price,
.coin__change-hour,
.coin__change-day {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.goodPrice {
  color: rgb(22, 214, 22);
}
.badPrice {
  color: red;
}
.returnButton {
  padding: 10px;
  border: 1px solid blue;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  right: 0;
  outline: none;
  cursor: pointer;
}
</style>
