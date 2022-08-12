<template>
  <div class="header">
    <div class="header__badge">
      <img src="~@/assets/icons/sticker-essentials.png" alt="Logo">
      CriptoParty
    </div>
    <div class="selector">Selector</div>
  </div>
</template>

<script setup>
console.log('head');
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
</style>
