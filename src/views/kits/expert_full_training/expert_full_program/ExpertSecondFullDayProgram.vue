<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "8-12 підтягувань + 10-15 ривків гирі 16 кг на кожну руку + 30-50 джампінгів джеків + 8-12 поштовхів " +
        "гирі 16 кг на кожну руку + 10 присідань + 10 вистрибувань на місці. 2-4 кола."
  },
  {
    image: "/images/men_deeps.webp",
    description: "15-25 віджимань на брусах + 20-30 присідань пліє 16-32 кг + 20-25 віджимань від підлоги + 8-12 " +
        "підтягувань з нижнього хвату + 8-12 присідань 10-30 кг + 10-15 вистрибувань на місці. 4 кола."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Кардіо 20 хвилин не інтенсивно."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_first_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-400">День 2</h2>
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