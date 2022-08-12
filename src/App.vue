<template>
  <HeaderNavigation/>
  <router-view/>
</template>

<script setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue';

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d7e0ea;
  background-color: rgb(8, 74, 139);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
