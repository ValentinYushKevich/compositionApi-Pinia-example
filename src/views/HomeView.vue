<template>
  <div class="contaner">
    <StockCard v-for="item in 3" :key="item" />
  </div>
</template>

<script setup>
import StockCard from '@/components/StockCard.vue';

</script>

<script >
export default {
  name: 'HomeView',
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
