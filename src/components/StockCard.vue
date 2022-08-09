<template>
  <div class="card">
    <div class="card__cover">
      <img class="card__image" alt="Vue logo" src="@/assets/logo.png" />
      <div class="card__title">
        Apple Inc.
        <span>AAPL</span>
      </div>
    </div>
    <span class="card__price">130 $</span>
  </div>
</template>

<script>
export default {
  name: 'StockCard',
  props: {
    msg: String,
  },
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
  img {
    width: 30px;
    margin-right: 20px;
  }
}
.card__title {
  font-size: 20px;
  text-align: left;
  span {
    display: block;
    font-size: 14px;
    color: rgb(224, 242, 105);
  }
}
</style>
