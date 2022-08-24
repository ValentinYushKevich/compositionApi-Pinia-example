<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="heart__contaner" :class="{ noSelect: props.check }"
  @click.stop="selectCoin(props.coinId)">
    <div class="heart"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  check: {
    type: Boolean,
  },
  coinId: {
    type: String,
  },
});

const emit = defineEmits(['selectCoin']);

function selectCoin(coinId: string | undefined) {
  if (coinId) emit('selectCoin', coinId);
}
</script>

<style scoped lang="scss" >
.heart__contaner {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
}

.heart {
  position: relative;
  width: 10px;
  height: 17px;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 50px 50px 0 0;
  transform: rotate(315deg);
}

.heart:before {
  position: absolute;
  width: 17px;
  height: 10px;
  left: 0;
  bottom: 0;
  content: "";
  background-color: transparent;
  border: 1px solid green;
  border-radius: 0 50px 50px 0;
}

.noSelect {

  .heart,
  .heart:before {
    background-color: red;
    border: none;
  }
}

.heart:hover:before,
.heart:hover {
  box-shadow: none;
}
</style>
