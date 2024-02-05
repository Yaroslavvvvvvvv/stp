<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Максимальна кількість підтягувань за 10 хвилин."
  },
  {
    image: "/images/men_deeps.webp",
    description: "Максимальна кількість віджимань на брусах або від підлоги за 10 хвилин."
  },
  {
    image: "/images/repeat.webp",
    description: "Повний відпочинок 7 хвилин."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Максимальна кількість підтягувань з нижнього хвата чи австралійських чи стоячи ногами на землі за 7 хвилин. 2 коли."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Максимальна кількість віджимань від підлоги за 7 хвилин. 2 коли."
  },
  {
    image: "/images/girl_squat.webp",
    description: "Тотал 40-120 присідань чи випадів із малим дробленням."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_first_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-red-400">День 4</h2>
      </div>
      <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        <div v-for="(exercise, index) in exercises" :key="index" class="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          <div class="h-auto overflow-hidden">
            <div class="h-44 overflow-hidden relative">
              <img :src="exercise.image" alt="" class="">
            </div>
          </div>
          <div class="bg-white py-4 px-3">
            <h3 class="text-sm font-extrabold"><span class="text-sm font-extrabold text-sky-800">{{ index + 1 }}. </span><br>
              {{ exercise.description }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>