<script setup>

import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
</script>

<template>
  <MyHeader v-if="$route.path !== '/'" />
  <router-view/>
  <MyFooter/>
</template>

<style scoped>
</style>
