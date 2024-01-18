<script setup>
const exercises = [
  {
    image: "/images/girl_push_up.webp",
    description: "1-6 віджимання від підлоги з колін + 2-10 скручування на прес на підлозі. 1-1.5 хвилин роботи."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Присідання з підйомом на носок 5-10 повторів + упор на прямих руках 5-15 секунд + підтягування стоячи\n" +
        "              ногами на землі в одній динаміці."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підтягування стоячи ногами на землі до первинної втоми + мертва тяга зі зведенням лопаток з вагою від 6 до\n" +
        "              20 кг до первинної втоми."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Повторення пунктів з 1 по 3."
  },
  {
    image: "/images/girl_push_up.webp",
    description: "Підйом ваги від 4 до 8 кг на біцепс з наступним жимом над головою. В одній динаміці два підходи."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Кардіо навантаження 10-20 хвилин. Не інтенсивне."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/beginner_first_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-sky-800 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-blue-600">День 1</h2>
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