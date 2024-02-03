<script setup>
import {ref} from 'vue';

const selectedSet = ref('basic');

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4 animate-fade-down animate-duration-1000 bg-gray-200">
    <router-link to="/levels" class="mb-8">
      <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
        Повернутись назад
        <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
      </button>
    </router-link>
    <label>
      <input type="radio" value="basic" class="peer hidden" name="framework" id="basic" v-model="selectedSet">
      <div
          class="hover:bg-red-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-400 group peer-checked:border-red-500">
        <h2 class="font-extrabold text-gray-950">Базовий комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-red-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>

    <label>
      <input type="radio" value="full" class="peer hidden" name="framework" id="full" v-model="selectedSet">

      <div
          class="hover:bg-violet-50 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-400 group peer-checked:border-violet-500">
        <h2 class="font-extrabold text-gray-950">Повний комплект</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-9 h-9 text-violet-600 invisible group-[.peer:checked+&]:visible">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </label>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'basic'">
    <p class="text-center bg-gray-200 text-gray-950 font-extrabold text-md p-2">
      Варіант програм тренувань, які передбачають наявність лише основного обладнання, а саме турніку та брусів</p>
    <router-link to="/expert_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-300 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/expert_first_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-400 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_second_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (12-15 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_third_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (10-12 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_fourth_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-700 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (12-14 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_fifth_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-800 text-white">
        <h2 class="text-3xl font-extrabold">Період 5 (8-11 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_sixth_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-900 text-white">
        <h2 class="text-3xl font-extrabold">Період 6</h2>
        <h2 class="text-xl font-extrabold m-2">(Залежно від числа дублювань)</h2>
      </div>
    </router-link>
    <router-link to="/expert_seventh_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-red-950 text-white">
        <h2 class="text-3xl font-extrabold">Період 7 (6-8 днів)</h2>
      </div>
    </router-link>
  </div>
  <div class="relative animate-fade-down animate-duration-1000" v-if="selectedSet === 'full'">
    <p class="text-center bg-gray-200 text-gray-950 font-extrabold text-md p-2">
      Варіант програм тренувань, які передбачають наявність більш ширшого переліку обладнання, крім турніка та брусів</p>
    <router-link to="/expert_full_warm">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-300 text-white">
        <h2 class="text-3xl font-extrabold">Вступні тренування</h2>
      </div>
    </router-link>
    <router-link to="/expert_first_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-400 text-white">
        <h2 class="text-3xl font-extrabold">Період 1 (10-14 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_second_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-500 text-white">
        <h2 class="text-3xl font-extrabold">Період 2 (13-16 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_third_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-600 text-white">
        <h2 class="text-3xl font-extrabold">Період 3 (6-8 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_fourth_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-700 text-white">
        <h2 class="text-3xl font-extrabold">Період 4 (11-13 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_fifth_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-800 text-white">
        <h2 class="text-3xl font-extrabold">Період 5 (5-7 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_sixth_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-900 text-white">
        <h2 class="text-3xl font-extrabold">Період 6 (13-16 днів)</h2>
        <h2 class="text-2xl font-extrabold m-2">(В залежності від рішення по першому дню, але не більше 17 днів)</h2>
      </div>
    </router-link>
    <router-link to="/expert_seventh_full_period">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-violet-950 text-white">
        <h2 class="text-3xl font-extrabold">Період 7 (13-16 днів)</h2>
      </div>
    </router-link>
  </div>
</template>

<style scoped>

</style>