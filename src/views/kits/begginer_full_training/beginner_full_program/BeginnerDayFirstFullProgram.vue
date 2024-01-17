<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "Австралійські підтягування в одній динаміці + горизонтальна тяга гуми на максимум. 10 хвилин роботи."
  },
  {
    image: "/images/second_run_man.webp",
    description: "\"Стульчик\" 5-10 секунд + 5-10 \"Насос\" + 5-10 присідань + 5-10 віджимань від підлоги або з колін. Три підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування стоячи ногами на землі в одній динаміці + скручування на прес на підлозі протягом 20-30 секунд. 2 підходи."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Махи на плечі від 1 до 4 кг або з гумою. 15-30 повторів. Відпочинок 45 секунд. 4 підходи."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Кардіо навантаження 10-15 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/beginner_second_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-sky-800 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
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