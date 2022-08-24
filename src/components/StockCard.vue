<template>
  <div class="card" @click="joinCoin" aria-hidden="true">
    <div class="card__cover">
      <img class="card__image" alt="Coin logo" :src="imgPath" />
      <div class="card__title">
        {{ coin?.CoinInfo.FullName }}
        <span>{{ coin?.CoinInfo.Internal }}</span>
      </div>
    </div>
    <span class="card__price">{{ coin?.DISPLAY?.USD?.HIGH24HOUR }} $</span>
    <HeartCoin :coin-id="coin.CoinInfo.Id" :check="coin.favorite"
    @select-coin="selectCoin" />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue';
import { useRouter } from 'vue-router';
import FavoriteCoin from '@/types/favoriteCoin';
import HeartCoin from './HeartCoin.vue';

const props = defineProps({
  coin: {
    required: true,
    type: Object as PropType<FavoriteCoin>,
  },
});

const imgPath = computed(
  (): string => `https://www.cryptocompare.com/${props?.coin?.CoinInfo?.ImageUrl}`,
);

const router = useRouter();
function joinCoin(): void {
  router.push(`/coin/${props?.coin?.CoinInfo?.Name}`);
}

function selectCoin(coinId: string) {
  console.log(coinId);
}
</script>

<script lang="ts">
export default {
  name: 'StockCard',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/mixins.scss';

.card {
  @include baseFlex;
  padding: 18px;
  border: 1px solid #ccc;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
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
