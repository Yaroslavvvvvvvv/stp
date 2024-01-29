<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "1-2 підтягування + 2-4 віджимання на брусах + 5-10 присідань + 1 підтягування + 4-6 віджимань від " +
        "підлоги. 15 хвилин роботи нон-стоп."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "10-20 насосів + 10-20 скручування на прес на підлозі + 30-50 джампінг джеків. 10 хвилин роботи нон-стоп."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "12-20 вертикальних віджимань від стіни або жим гуми або ваги над головою + 3 берпі (з 3 віджиманнями щоразу) + 30 секунд планка. 10 хвилин."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Тотал 20-50 підтягувань + тотал 50-100 віджимань від підлоги + тотал 50-120 присідань."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_full_warm">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-300">Вступні тренування. День 1</h2>
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