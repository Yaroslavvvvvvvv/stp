<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Вертикальні віджимання від стіни на максимум. 5 підходів. Відпочинок 1 хвилина."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "1 підтягування + підтягування стоячи ногами на землі в одній динаміці та кожен новий підхід мінус 2 повтори."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Насос 1 повтор + віджимання від підлоги з колін 1 повтор. В одній динаміці."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Присідання 5 повторів + стільчик 10 секунд. 4 підходи."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Віджимання від підлоги в одній динаміці."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Підйом із ліктів 5-10 повторів + планка 15-30 секунд + 10-20 скручування на прес на підлозі."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Насос та стрибки на скакалці 8-14 кіл, відпочинок 20 секунд."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_warm">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-sky-400">Вступні тренування. День 2</h2>
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