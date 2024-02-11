<script setup>

import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";

</script>

<template>
  <MyHeader v-if="$route.path !== '/' && $route.path !== '/register' && $route.path !== '/forgot_password'"/>
  <router-view/>
  <MyFooter/>
</template>

<style scoped>
</style>
