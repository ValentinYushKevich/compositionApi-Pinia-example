<template>
  <div class="contaner">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.contaner {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(9, 65, 121);
}
</style>
