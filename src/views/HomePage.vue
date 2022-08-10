<template>
  <div class="contaner" v-if="stockStore.filteredStock">
    <StockCard
      v-for="company in stockStore.filteredStock"
      :key="company.symbol || Date.now()"
      :company="company"
    />
  </div>
</template>

<script setup>
import { useStockStore } from '@/store/stock';
import StockCard from '@/components/StockCard.vue';

const stockStore = useStockStore();
stockStore.getAllStock();

</script>

<script>
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
