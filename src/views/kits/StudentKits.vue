<script setup>
import {ref} from 'vue';

const selectedSet = ref('basic');

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4 animate-fade-down animate-duration-1000 bg-gray-200">
    <router-link to="/levels" class="mb-8">
      <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
        Повернутись назад
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </router-link>
    <label>
      <input type="radio" value="basic" class="peer hidden" name="framework" id="basic" v-model="selectedSet">
      <div
          class="hover:bg-cyan-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-400 group peer-checked:border-cyan-500">
        <h2 class="font-extrabold text-gray-950">Базовий комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-cyan-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>

    <label>
      <input type="radio" value="full" class="peer hidden" name="framework" id="full" v-model="selectedSet">

      <div
          class="hover:bg-sky-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-400 group peer-checked:border-sky-500">
        <h2 class="font-extrabold text-gray-950">Повний комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-sky-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'basic'">
    <p class="text-center bg-gray-200 text-gray-950 font-extrabold text-md p-2">
      Варіант програм тренувань, які передбачають наявність лише основного обладнання, а саме турніку та брусів</p>
    <router-link to="/student_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-400 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/student_first_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_second_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (9-11 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_third_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-700 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (8-10 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_fourth_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-cyan-800 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (7-9 днів)</h2>
      </div>
    </router-link>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'full'">
    <p class="text-center bg-gray-200 text-gray-950 font-extrabold text-md p-2">
      Варіант програм тренувань, які передбачають наявність більш ширшого переліку обладнання, крім турніка та брусів</p>
    <router-link to="/student_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-sky-400 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/student_first_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-sky-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_second_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-sky-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (9-11 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_third_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-sky-700 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (8-10 днів)</h2>
      </div>
    </router-link>
    <router-link to="/student_fourth_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-sky-800 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (7-9 днів)</h2>
      </div>
    </router-link>
  </div>
</template>

<style scoped>

</style>