<script setup>
const exercises = [
  {
    image: "/images/men_deeps.webp",
    description: "25-40 віджимань на брусах + 15-35 підтягувань + 25-40 присідань."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "15-35 віджимань на брусах + 12-25 підтягувань + 15-25 присідань."
  },
  {
    image: "/images/men_deeps.webp",
    description: "25 віджимань на брусах + 15 підтягувань + 25 присідань."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "10 віджимань на брусах + 10 підтягувань + 20 присідань."
  },
  {
    image: "/images/steam_press.webp",
    description: "30 скручування на прес на підлозі + віджимання в одній динаміці. 2 підходи."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування на максимум. 2 підходи."
  },
  {
    image: "/images/run_man.webp",
    description: "Тотал 125 підконтрольних підйомів на ікри. 3 підходи."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Кардіо 15 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_warm">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-red-300">Вступні тренування. День 3</h2>
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