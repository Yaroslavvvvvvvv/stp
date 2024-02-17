<script setup>
const exercises = [
  {
    image: "/images/boy_pull_up.webp",
    description: "Підтягування стоячи ногами на землі. 1 повтор кожні 30-45 секунд або швидше. Тотал 10-35."
  },
  {
    image: "/images/light_push_up.webp",
    description: "Віджимання від підлоги. Тотал 10-40. Кожне останнє віджимання підходу робимо негативне опускання 3-5." +
        "секунд або стоїмо в упорі на прямих руках 7-10 секунд."
  },
  {
    image: "/images/squat.webp",
    description: "5-10 присідань + 10-20 махів на плечі, вага 2-5 кг або вертикальні віджимання від стіни 5-10 повторів. 10 хвилин роботи."
  },
  {
    image: "/images/gym_push_up.webp",
    description: "2-10 віджимання від підлоги + віджимання від підлоги з колін в одній динаміці."
  },
  {
    image: "/images/gym_pull_up.webp",
    description: "Підтягування стоячи на землі в динаміці."
  },
  {
    image: "/images/water.webp",
    description: "Повторення пунктів 4-5."
  },
  {
    image: "/images/australian_pull_up.webp",
    description: "Австралійські підтягування до первинної втоми."
  },
  {
    image: "/images/caviar.webp",
    description: "Підйоми на ікри 10 повторів. Відпочинок 30 секунд і ще раз."
  },
  {
    image: "/images/water.webp",
    description: "Повтор пунктів 7 і 8."
  },
  {
    image: "/images/treadmill.webp",
    description: "Кардіо навантаження 10-15 хвилин."
  },
];
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-screen-xl px-4 w-full">
      <router-link to="/beginner_second_period">
        <button class="mb-8 group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
          Повернутись назад
          <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </router-link>
      <div class="mb-8">
        <h2 class="text-center text-3xl font-bold text-emerald-800">День 2</h2>
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