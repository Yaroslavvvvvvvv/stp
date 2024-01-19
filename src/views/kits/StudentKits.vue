<script setup>
import {ref} from 'vue';

const selectedSet = ref('basic');

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4 animate-fade-down animate-duration-1000">
    <router-link to="/levels">
      <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-sky-800 text-lg font-bold text-white">
        Повернутись назад
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </router-link>
    <label>
      <input type="radio" value="basic" class="peer hidden" name="framework" id="basic" v-model="selectedSet">
      <div
          class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
        <h2 class="font-medium text-gray-700">Базовий комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>

    <label>
      <input type="radio" value="full" class="peer hidden" name="framework" id="full" v-model="selectedSet">

      <div
          class="hover:bg-gray-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
        <h2 class="font-medium text-gray-700">Повний комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'basic'">
    <router-link to="/student_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-400 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/beginner_first_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-yellow-300 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-yellow-400 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (9-11 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-yellow-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (8-10 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-yellow-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (7-9 днів)</h2>
      </div>
    </router-link>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'full'">
    <router-link to="/student_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-green-400 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/beginner_first_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-300 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-400 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (9-11 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (8-10 днів)</h2>
      </div>
    </router-link>
    <router-link to="/beginner_second_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-orange-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (7-9 днів)</h2>
      </div>
    </router-link>
  </div>
</template>

<style scoped>

</style>