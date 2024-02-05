<script setup>
const exercises = [
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування EMOM. з 3 повторів, кожне коло +1. І вниз."
  },
  {
    image: "/images/boy_push_up.webp",
    description: "Віджимання від підлоги EMOM. з 7 повторів, кожне коло +1. І вниз."
  },
  {
    image: "/images/men_pull_up.webp",
    description: "Підтягування з нижнього хвата + віджимання на брусах в одній динаміці."
  },
  {
    image: "/images/man_swing.webp",
    description: "Махи на плечі в сторони і відразу перед собою або вертикальні віджимання від стіни в динаміці. " +
        "10 повторів + 3 кг. 4 підходи. Відпочинок 30/45/60/80 секунд."
  },
  {
    image: "/images/second_run_man.webp",
    description: "Тотал 150 джампінг-джеків або інше довільне кардіо 10 хвилин."
  },
  {
    image: "/images/girl_press.webp",
    description: "Тотал 50 підйомів зігнутих у колінах ніг на перекладині."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/adept_second_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-400 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-amber-500">День 4</h2>
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