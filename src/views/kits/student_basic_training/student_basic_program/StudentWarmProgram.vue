<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "3-5 віджимань від підлоги + 1-3 підтягування + 5-8 присідань з підйомом на носки. 10 хвилин роботи."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "4-6 віджимань від підлоги з колін + 2-5 підтягувань стоячи ногами на землі + 25 джампінг джеків або " +
        "50 стрибків на скакалці + 3-5 присідань з підйомом на носки. 5 хвилин. Відпочинок 1-2 хвилини і ще один " +
        "такий же комплекс, але 4 хвилини і без присідань."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Австралійські підтягування 2 повтори. Кожен новий підхід +2."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "5-10 скручування на прес на підлозі + насос 5-10 повторів. Безперервний комплекс на максимум."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Вертикальні віджимання від стіни. 3 підходи в одній динаміці."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/student_warm">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-sky-800 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-cyan-400">День 1</h2>
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