<script setup>
const exercises = [
  {
    image: "/images/rak.webp",
    description: "3-10 віджимань у стійці на руках біля стіни + 20-30 махів у сторони з малою вагою або гумою + 10-20 " +
        "австралійських підтягувань. Далі відпочинок хвилина і жим сидячи з опорою на стіну ваги 10-20 кг або гуми тотал" +
        " 10-25 на кожну руку. Роби на максимум і змінюй на іншу, і так нон стоп, поки не виконаєш тотал 15."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "2 підтягування з верхнього хвату і відразу міняємо на нижній, чергуємо щоразу. На максимум."
  },
  {
    image: "/images/rak.webp",
    description: "Повторення пункту 1, але більший відпочинок між вправами."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Повторення пункту 2, але чередуємо по 1 підтягуванню."
  },
  {
    image: "/images/girl_squat.webp",
    description: "5 вистрибувань + 5 віджимань від підлоги. 10 хвилин роботи."
  },
  {
    image: "/images/run_man.webp",
    description: "Тотал 200 джампінг джеків."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування в одній динаміці + віджимання від підлоги в одній динаміці. Два підходи."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Підтягування стоячи ногами на землі в одній динаміці + віджимання від підлоги з колін у динаміці."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/expert_second_full_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-red-600 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-violet-500">День 2</h2>
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