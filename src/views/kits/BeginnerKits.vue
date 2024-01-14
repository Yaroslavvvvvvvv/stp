<script setup>
import {ref} from 'vue';

const selectedSet = ref('basic');

</script>

<template>
  <div class="flex justify-between">
    <div class="m-4">
      <input type="radio" id="basic" value="basic" v-model="selectedSet"/>
      <label for="basic">Базовий комплект</label>
    </div>
    <div class="m-4">
      <input type="radio" id="full" value="full" v-model="selectedSet"/>
      <label for="full">Повний комплект</label>
    </div>
  </div>
  <div class="relative" v-if="selectedSet === 'basic'">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
      <h2 class="text-4xl">Вступні тренування</h2>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
      <h2 class="text-4xl">Період 1 (13-16 днів)</h2>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <h2 class="text-4xl">Період 2 (14-16 днів)</h2>
    </div>
  </div>
  <div class="relative" v-if="selectedSet === 'full'">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400">
      <h2 class="text-4xl">Вступні тренування</h2>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
      <h2 class="text-4xl">Період 1 (13-16 днів)</h2>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
      <h2 class="text-4xl">Період 2 (14-16 днів)</h2>
    </div>
  </div>
</template>

<style scoped>

</style>