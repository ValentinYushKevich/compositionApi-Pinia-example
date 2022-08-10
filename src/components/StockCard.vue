<template>
  <div class="card">
    <div class="card__cover">
      <img class="card__image" alt="Vue logo" :src="imgPath" />
      <div class="card__title">
        {{ company.CoinInfo.FullName }}
        <span>{{ company.CoinInfo.Internal }}</span>
      </div>
    </div>
    <span class="card__price">{{ company.DISPLAY.USD.HIGH24HOUR }} $</span>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps(['company']);

const imgPath = computed(
  () => `https://www.cryptocompare.com/${props.company.CoinInfo.ImageUrl}`,
);
</script>

<script>
export default {
  name: 'StockCard',
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
.card__cover {
  display: flex;
  align-items: center;
  flex-grow: 1;
  img {
    width: 30px;
    margin-right: 20px;
  }
}
.card__title {
  font-size: 20px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    display: block;
    font-size: 14px;
    color: rgb(224, 242, 105);
  }
}
</style>
