<template>
  <div class="contaner" v-if="stockStore.filteredStock">
    <StockCard
      v-for="coin in stockStore.filteredStock"
      :key="coin.symbol"
      :coin="coin"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStockStore } from '@/store/stock';
import StockCard from '@/components/StockCard.vue';

const stockStore = useStockStore();

onMounted(() => stockStore.getAllStock());
</script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<style lang="scss" scoped>
.contaner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
